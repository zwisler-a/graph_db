import {PropertiesMap} from "../../graph/properties";
import {Graph} from "../../graph/graph";
import {CreateNode} from "./create-node";
import {CreateEdge} from "./create-edge";
import {CreateGraph} from "./create-graph";


export class CreateEdgeBuilder {
    public direction!: ">" | "<" | "-";
    public label?: string;

    constructor(public props?: PropertiesMap, public readonly parent?: CreateNodeBuilder) {
    }

    createNode(props?: PropertiesMap) {
        return new CreateNodeBuilder(props, this.parent, undefined, this);
    }

    createEdges(left: CreateNode, right: CreateNode): CreateEdge[] {
        if (this.direction == '>') {
            return [new CreateEdge(left, right, this.props, this.label)];
        }
        if (this.direction == '<') {
            return [new CreateEdge(right, left, this.props, this.label)];
        }
        if (this.direction == '-') {
            return [
                new CreateEdge(right, left, this.props, this.label),
                new CreateEdge(left, right, this.props, this.label),
            ];
        }
        return []
    }
}

export class CreateNodeBuilder {


    constructor(
        private props?: PropertiesMap,
        private parent?: CreateNodeBuilder,
        private alias?: string,
        private edge?: CreateEdgeBuilder,
        public label?: string
    ) {
    }

    createEdge(props?: PropertiesMap) {
        return new CreateEdgeBuilder(props, this);
    }

    close() {
        if (!this.parent) {
            throw new Error('Closed the root node!')
        }
        return this.parent;
    }

    build(): CreateGraph {
        const graphNodes: CreateNode[] = [];
        const graphEdges: CreateEdge[] = [];

        const createNode = (nodeBuilder: CreateNodeBuilder | null) => {
            if (!nodeBuilder) return;
            const currentNode = new CreateNode();
            currentNode.setProperties(nodeBuilder.props ?? {});
            currentNode.alias = nodeBuilder.alias;
            currentNode.label = nodeBuilder.label;
            const edgeBuilder = nodeBuilder.edge;
            if (edgeBuilder) {
                const edges = edgeBuilder.createEdges(createNode(edgeBuilder.parent!)!, currentNode)
                graphEdges.push(...edges);
            }
            graphNodes.push(currentNode);
            return currentNode;
        }
        createNode(this);
        return new CreateGraph(graphNodes, graphEdges);
    }

    setAlias(alias: string) {
        this.alias = alias;
    }

    addProperty(key: string, value: string) {
        if (!this.props) this.props = {};
        this.props[key] = value;
    }
}


export class CreateGraphBuilder {

    public static startNode(props?: PropertiesMap) {
        return new CreateNodeBuilder(props);
    }

    private rootNodeBuilder: CreateNodeBuilder = new CreateNodeBuilder();

    public createNode(props?: PropertiesMap) {
        this.rootNodeBuilder = new CreateNodeBuilder(props);
        return this.rootNodeBuilder;
    }

    public build(): Graph {
        return this.rootNodeBuilder.build();
    }
}

export type Builder = CreateGraphBuilder | CreateEdgeBuilder | CreateNodeBuilder;