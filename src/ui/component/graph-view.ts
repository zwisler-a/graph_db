import * as d3 from 'd3';
import {SimulationLinkDatum, SimulationNodeDatum} from 'd3';
import {Graph} from "../../graph/graph";
import {Node} from "../../graph/node";
import {Edge} from "../../graph/edge";
import {Component} from "../core/component";

@Component('graph-view')
class GraphView extends HTMLElement {

    public _nodeNameFormatter: (node: Partial<Node>) => string = (n: any) => {
        return `[${n.label}]${JSON.stringify(n.properties, null, 2)}`;
    }
    public _edgeNameFormatter: (node: Partial<Edge>) => string = (e) => {
        return `[${e.label}]`
    }
    public charge = -100;
    public linkDistance = 200;
    public centerStrength = 0.5;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<svg></svg>`;
    }

    public async drawGraph(graph: Graph) {
        const svg = this.querySelector('svg') as SVGSVGElement;
        const nodes: (Partial<Node> & SimulationNodeDatum)[] = graph.nodes.map((node: Node) => ({...node}));
        const edges: (Partial<Edge> & SimulationLinkDatum<SimulationNodeDatum>)[] = graph.edges.flatMap((edge) =>
            ({
                ...edge,
                source: edge.from.id,
                target: edge.to.id,
            })
        );
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        const width = +svg.clientWidth;
        const height = +svg.clientHeight;
        console.log(width, height);

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(edges).id((d: any) => d.id).distance(this.linkDistance))
            .force('charge', d3.forceManyBody().strength(this.charge))
            .force('center', d3.forceCenter(width / 2, height / 2).strength(this.centerStrength));

        const defs = d3.select(svg).append('defs');
        const rnd = Math.ceil(Math.random() * 100);
        defs.append('marker')
            .attr('id', 'arrow' + rnd)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 22)
            .attr('refY', 0)
            .attr('markerWidth', 5)
            .attr('markerHeight', 5)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', '#999');

        const edgeGroup = d3.select(svg).append('g')
            .attr('class', 'edges')
            .selectAll('g.edge')
            .data(edges)
            .enter()
            .append('g')
            .attr('class', 'edge');

        edgeGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('fill', 'black')
            .attr('dy', -5)
            .text(this._edgeNameFormatter);

        edgeGroup.append('line')
            .attr('stroke', '#999')
            .attr('stroke-width', 2)
            .attr('marker-end', `url(#arrow${rnd})`);

        const nodeGroup = d3.select(svg).append('g')
            .attr('class', 'nodes')
            .selectAll('g.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node')
            .call(d3.drag<SVGGElement, any, d3.SubjectPosition>()
                .on('start', (event, d) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on('end', (event, d) => {
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
            .text(this._nodeNameFormatter);

        simulation.on('tick', () => {
            edgeGroup.select('line')
                .attr('x1', (d: any) => d.source.x)
                .attr('y1', (d: any) => d.source.y)
                .attr('x2', (d: any) => d.target.x)
                .attr('y2', (d: any) => d.target.y);

            edgeGroup.select('text')
                .attr('x', (d: any) => (d.source.x + d.target.x) / 2)
                .attr('y', (d: any) => (d.source.y + d.target.y) / 2);

            nodeGroup.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
        });

        // Create a group element for zooming and panning
        const graphGroup = d3.select(svg).append('g');

        // Move the node and edge groups into the graphGroup
        graphGroup.append(() => svg.querySelector('.edges'));
        graphGroup.append(() => svg.querySelector('.nodes'));

        // Zoom and pan behavior
        const zoom = d3.zoom()
            .scaleExtent([0.1, 4]) // Min and max zoom
            .on('zoom', (event) => {
                graphGroup.attr('transform', event.transform);
            });

        d3.select(svg).call(zoom as any);
    }
}

export {GraphView};
