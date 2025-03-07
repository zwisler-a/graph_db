const {ipcRenderer} = require('electron');
require('./gql-input')

class GraphTab extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <gql-input></gql-input>
      <button class="load-button">Execute</button>
      <div class="sliders">
        <label>Charge: <input type="range" class="charge-slider" min="-500" max="500" value="-100"></label>
        <label>Link Distance: <input type="range" class="link-slider" min="10" max="600" value="200"></label>
        <label>Centering: <input type="range" class="center-slider" min="0" max="1" step="0.01" value="0.5"></label>
      </div>
      <svg width="800" height="600"></svg>
    `;
        this.querySelector('.load-button').addEventListener('click', async () => {
            const gqlInput = this.querySelector('gql-input');
            await this.drawGraph(gqlInput.query);
        });
        this.drawGraph("ALL");
    }

    async drawGraph(query) {
        const svg = this.querySelector('svg');
        const queryResults = await ipcRenderer.invoke('get-graph-data', query);
        const nodes = queryResults.rawRows.flatMap(graph => graph.nodes);
        const edges = queryResults.rawRows.flatMap(graph =>
            graph.edges.map(edge => ({
                source: edge.from.id,
                target: edge.to.id,
                ...edge
            }))
        );
        console.log(nodes);
        console.log(edges);
        // Clear previous graph
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
        const nodeTextFormatter = node => {
            const props = Object.entries(node.properties).map(([k, v]) => `${k}: ${v}`).join('\n');
            return `${node.label}\n${props}`
        };
        const edgeTextFormatter = d => {
            const props = Object.entries(d.properties).map(([k, v]) => `${k}: ${v}`).join('\n');
            return `:${d.label}\n${props}`
        };
        const width = +svg.getAttribute('width');
        const height = +svg.getAttribute('height');
        const charge = +this.querySelector('.charge-slider').value;
        const linkDist = +this.querySelector('.link-slider').value;
        const centerStrength = +this.querySelector('.center-slider').value;
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(edges).id(d => d.id).distance(linkDist))
            .force('charge', d3.forceManyBody().strength(charge))
            .force('center', d3.forceCenter(width / 2, height / 2).strength(centerStrength));

        const defs = d3.select(svg).append("defs");
        const rnd = Math.ceil(Math.random()*100); // Dont judge me
        defs.append("marker")
            .attr("id", "arrow" + rnd)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 22) // Adjusted for better alignment
            .attr("refY", 0)
            .attr("markerWidth", 5)
            .attr("markerHeight", 5)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5") // Triangle shape
            .attr("fill", "#999");

        // Create edge groups with line and attribute labels
        const edgeGroup = d3.select(svg).append('g')
            .attr('class', 'edges')
            .selectAll('g.edge')
            .data(edges)
            .enter()
            .append('g')
            .attr('class', 'edge');
        edgeGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr("fill", "black")
            .attr('dy', -5)
            .text(edgeTextFormatter);
        edgeGroup.append('line')
            .attr('stroke', '#999')
            .attr('stroke-width', 2)
            .attr('marker-end', `url(#arrow${rnd})`)
        // Create node groups with circle, text labels and drag behavior
        const nodeGroup = d3.select(svg).append('g')
            .attr('class', 'nodes')
            .selectAll('g.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on("start", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                })
            );
        nodeGroup.append('circle')
            .attr('r', 10)
            .attr('fill', '#69b3a2');
        nodeGroup.append('text')
            .attr('dx', 12)
            .attr('dy', '.35em')
            .text(nodeTextFormatter);
        simulation.on('tick', () => {
            // Update edge positions and label positions at midpoints
            edgeGroup.select('line')
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            edgeGroup.select('text')
                .attr('x', d => (d.source.x + d.target.x) / 2)
                .attr('y', d => (d.source.y + d.target.y) / 2);
            // Update node positions
            nodeGroup.attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }
}

customElements.define('graph-tab', GraphTab);
