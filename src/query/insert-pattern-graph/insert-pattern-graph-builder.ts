import {PropertiesMap} from "../../graph/properties";
import {Graph} from "../../graph/graph";
import {InsertPatternNode} from "./insert-pattern-node";
import {InsertPatternEdge} from "./insert-pattern-edge";
import {InsertPatternGraph} from "./insert-pattern-graph";


export class InsertPatternEdgeBuilder {
    public direction!: ">" | "<" | "-";
    public label?: string;

    constructor(public props?: PropertiesMap, public readonly parent?: InsertPatternNodeBuilder) {
    }

    createNode(props?: PropertiesMap) {
        return new InsertPatternNodeBuilder(props, this.parent, undefined, this);
    }

    createEdges(left: InsertPatternNode, right: InsertPatternNode): InsertPatternEdge[] {
        if (this.direction == '>') {
            return [new InsertPatternEdge(left, right, this.props, this.label)];
        }
        if (this.direction == '<') {
            return [new InsertPatternEdge(right, left, this.props, this.label)];
        }
        if (this.direction == '-') {
            return [
                new InsertPatternEdge(right, left, this.props, this.label),
                new InsertPatternEdge(left, right, this.props, this.label),
            ];
        }
        return []
    }
}

export class InsertPatternNodeBuilder {


    constructor(
        private props?: PropertiesMap,
        private parent?: InsertPatternNodeBuilder,
        private alias?: string,
        private edge?: InsertPatternEdgeBuilder,
        public label?: string
    ) {
    }

    createEdge(props?: PropertiesMap) {
        return new InsertPatternEdgeBuilder(props, this);
    }

    close() {
        if (!this.parent) {
            throw new Error('Closed the root node!')
        }
        return this.parent;
    }

    build(): InsertPatternGraph {
        const graphNodes: InsertPatternNode[] = [];
        const graphEdges: InsertPatternEdge[] = [];

        const createNode = (nodeBuilder: InsertPatternNodeBuilder | null) => {
            if (!nodeBuilder) return;
            const currentNode = new InsertPatternNode();
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
        return new InsertPatternGraph(graphNodes, graphEdges);
    }

    setAlias(alias: string) {
        this.alias = alias;
    }

    addProperty(key: string, value: string) {
        if (!this.props) this.props = {};
        this.props[key] = value;
    }
}


export class InsertPatternGraphBuilder {

    public static startNode(props?: PropertiesMap) {
        return new InsertPatternNodeBuilder(props);
    }

    private rootNodeBuilder: InsertPatternNodeBuilder = new InsertPatternNodeBuilder();

    public createNode(props?: PropertiesMap) {
        this.rootNodeBuilder = new InsertPatternNodeBuilder(props);
        return this.rootNodeBuilder;
    }

    public build(): Graph {
        return this.rootNodeBuilder.build();
    }
}
