import {PropertiesMap} from "../../graph/properties";
import {Graph} from "../../graph/graph";
import {PatternMatchingNode} from "./pattern-matching-graph/pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching-graph/pattern-matching-edge";
import {PatternMatchingGraph} from "./pattern-matching-graph/pattern-matching-graph";


export class PatternMatchingEdgeBuilder {
    public direction!: ">" | "<" | "-";

    constructor(public props?: PropertiesMap, public readonly parent?: PatternMatchingNodeBuilder) {
    }

    createNode(props?: PropertiesMap) {
        return new PatternMatchingNodeBuilder(props, this.parent, undefined, this);
    }

    createEdges(left: PatternMatchingNode, right: PatternMatchingNode): PatternMatchingEdge[] {
        if (this.direction == '>') {
            return [new PatternMatchingEdge(left, right, this.props)];
        }
        if (this.direction == '<') {
            return [new PatternMatchingEdge(right, left, this.props)];
        }
        if (this.direction == '-') {
            return [
                new PatternMatchingEdge(right, left, this.props),
                new PatternMatchingEdge(left, right, this.props),
            ];
        }
        return []
    }
}

export class PatternMatchingNodeBuilder {

    constructor(
        private props?: PropertiesMap,
        private parent?: PatternMatchingNodeBuilder,
        private alias?: string,
        private edge?: PatternMatchingEdgeBuilder
    ) {
    }

    createEdge(props?: PropertiesMap) {
        return new PatternMatchingEdgeBuilder(props, this);
    }

    close() {
        if (!this.parent) {
            throw new Error('Closed the root node!')
        }
        return this.parent;
    }

    build(): PatternMatchingGraph {
        const graphNodes: PatternMatchingNode[] = [];
        const graphEdges: PatternMatchingEdge[] = [];

        const createNode = (nodeBuilder: PatternMatchingNodeBuilder | null) => {
            if (!nodeBuilder) return;
            const currentNode = new PatternMatchingNode();
            currentNode.setProperties(nodeBuilder.props ?? {});
            currentNode.alias = nodeBuilder.alias;
            const edgeBuilder = nodeBuilder.edge;
            if (edgeBuilder) {
                const edges = edgeBuilder.createEdges(createNode(edgeBuilder.parent!)!, currentNode)
                graphEdges.push(...edges);
            }
            graphNodes.push(currentNode);
            return currentNode;
        }
        createNode(this);
        return new PatternMatchingGraph(graphNodes, graphEdges);
    }

    setAlias(alias: string) {
        this.alias = alias;
    }

    addProperty(propName: string, prop: any) {
        if (!this.props) this.props = {};
        this.props[propName] = prop;
    }
}


export class PatternMatchingGraphBuilder {

    public static startNode(props?: PropertiesMap) {
        return new PatternMatchingNodeBuilder(props);
    }

    private rootNodeBuilder: PatternMatchingNodeBuilder = new PatternMatchingNodeBuilder();

    public createNode(props?: PropertiesMap) {
        this.rootNodeBuilder = new PatternMatchingNodeBuilder(props);
        return this.rootNodeBuilder;
    }

    public build(): Graph {
        return this.rootNodeBuilder.build();
    }
}

export type Builder = PatternMatchingGraphBuilder | PatternMatchingEdgeBuilder | PatternMatchingNodeBuilder;