import {PropertiesMap} from "./properties";
import {Graph} from "./graph";
import {Node} from "./node";
import {Edge} from "./edge";


export class EdgeBuilder {
    public nodeBuilder: NodeBuilder | undefined;

    constructor(private props: PropertiesMap, private parent: NodeBuilder) {
    }

    createNode(props?: PropertiesMap) {
        const builder = new NodeBuilder(props, this.parent);
        this.nodeBuilder = builder;
        return builder;
    }
}

export class NodeBuilder {
    private edges: EdgeBuilder[] = [];

    constructor(private props: PropertiesMap, private parent: NodeBuilder) {
    }

    createEdge(props?: PropertiesMap) {
        const builder = new EdgeBuilder(props, this);
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
        const nodes: Node[] = [];

        const rootNode = new Node();
        rootNode.setProperties(this.props);
        nodes.push(rootNode);

        let currentNodeBuilder = this;
        while (true) {
            const currentNode = new Node();
            currentNode.setProperties(currentNodeBuilder.props);
            currentNodeBuilder.edges.map(edgeBuilder => new Edge(currentNode, null))
        }

    }

}


export class GraphBuilder {
    public static startNode(props?: PropertiesMap) {
        return new NodeBuilder(props, null);
    }
}