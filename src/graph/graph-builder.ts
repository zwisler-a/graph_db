import {PropertiesMap} from "./properties";
import {Graph} from "./graph";
import {Node} from "./node";
import {Edge} from "./edge";


export class EdgeBuilder {
    public nodeBuilder: NodeBuilder | undefined;

    constructor(public props?: PropertiesMap, private parent?: NodeBuilder, public label?: string) {
    }

    createNode(props?: PropertiesMap) {
        const builder = new NodeBuilder(props, this.parent);
        this.nodeBuilder = builder;
        return builder;
    }
}

export class NodeBuilder {
    private edges: EdgeBuilder[] = [];

    constructor(private props?: PropertiesMap, private parent?: NodeBuilder) {
    }

    createEdge(label?: string, props?: PropertiesMap) {
        const builder = new EdgeBuilder(props, this, label);
        this.edges.push(builder);
        return builder;
    }

    close() {
        if (!this.parent) {
            throw new Error('Closed the root node!')
        }
        return this.parent;
    }

    build(): Graph {
        const graphNodes: Node[] = [];
        const graphEdges: Edge[] = [];


        const createNode = (nodeBuilder?: NodeBuilder) => {
            if (!nodeBuilder) return;
            const currentNode = new Node();
            currentNode.setProperties(nodeBuilder.props);
            const edges = nodeBuilder.edges.map(edgeBuilder => {
                const edge = new Edge(currentNode, createNode(edgeBuilder.nodeBuilder)!, edgeBuilder.props, edgeBuilder.label)
                edge.setProperties(edgeBuilder.props)
                return edge;
            });
            graphEdges.push(...edges);
            graphNodes.push(currentNode);
            return currentNode;
        }
        createNode(this);
        return new Graph(graphNodes, graphEdges);
    }

}


export class GraphBuilder {

    public static startNode(props?: PropertiesMap) {
        return new NodeBuilder(props);
    }

    private rootNodeBuilder?: NodeBuilder;

    public createNode(props?: PropertiesMap) {
        this.rootNodeBuilder = new NodeBuilder(props);
        return this.rootNodeBuilder;
    }

    public build(): Graph {
        return this.rootNodeBuilder!.build();
    }
}