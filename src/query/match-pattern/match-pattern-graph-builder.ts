import {PropertiesMap} from "../../graph/properties";
import {Graph} from "../../graph/graph";
import {MatchPatternNode} from "./match-pattern-graph/match-pattern-node";
import {MatchPatternEdge} from "./match-pattern-graph/match-pattern-edge";
import {MatchPatternGraph} from "./match-pattern-graph/match-pattern-graph";


export class MatchPatternEdgeBuilder {
    public direction!: ">" | "<" | "-";
    public label?: string;
    public alias?: string;

    constructor(public props?: PropertiesMap, public readonly parent?: MatchPatternNodeBuilder) {
    }

    createNode(props?: PropertiesMap) {
        return new MatchPatternNodeBuilder(props, this.parent, undefined, this);
    }

    createEdge(left: MatchPatternNode, right: MatchPatternNode): MatchPatternEdge {
        if (this.direction == '>') {
            return new MatchPatternEdge(left, right, this.props, this.label, this.alias);
        }
        if (this.direction == '<') {
            return new MatchPatternEdge(right, left, this.props, this.label, this.alias);
        }
        if (this.direction == '-') {
            const edge = new MatchPatternEdge(left, right, this.props, this.label, this.alias);
            edge.ignoreDirection = true;
            return edge;
        }
        throw new Error("Direction not defined");
    }

    setAlias(text: string) {
        this.alias = text;
    }
}

export class MatchPatternNodeBuilder {
    label?: string;

    constructor(
        private props?: PropertiesMap,
        private parent?: MatchPatternNodeBuilder,
        private alias?: string,
        private edge?: MatchPatternEdgeBuilder
    ) {
    }

    createEdge(props?: PropertiesMap) {
        return new MatchPatternEdgeBuilder(props, this);
    }

    close() {
        if (!this.parent) {
            throw new Error('Closed the root node!')
        }
        return this.parent;
    }

    build(): MatchPatternGraph {
        const graphNodes: MatchPatternNode[] = [];
        const graphEdges: MatchPatternEdge[] = [];

        const createNode = (nodeBuilder: MatchPatternNodeBuilder | null) => {
            if (!nodeBuilder) return;
            const currentNode = nodeBuilder.createNode()
            const edgeBuilder = nodeBuilder.edge;
            if (edgeBuilder) {
                const edge = edgeBuilder.createEdge(createNode(edgeBuilder.parent!)!, currentNode)
                graphEdges.push(edge);
            }
            graphNodes.push(currentNode);
            return currentNode;
        }
        createNode(this);
        return new MatchPatternGraph(graphNodes, graphEdges);
    }

    setAlias(alias: string) {
        this.alias = alias;
    }

    addProperty(propName: string, prop: any) {
        if (!this.props) this.props = {};
        this.props[propName] = prop;
    }

    private createNode() {
        const node = new MatchPatternNode();
        node.setProperties(this.props ?? {});
        node.alias = this.alias;
        node.label = this.label;
        return node;
    }
}


export class MatchPatternGraphBuilder {

    public static startNode(props?: PropertiesMap) {
        return new MatchPatternNodeBuilder(props);
    }

    private rootNodeBuilder: MatchPatternNodeBuilder = new MatchPatternNodeBuilder();

    public createNode(props?: PropertiesMap) {
        this.rootNodeBuilder = new MatchPatternNodeBuilder(props);
        return this.rootNodeBuilder;
    }

    public build(): Graph {
        return this.rootNodeBuilder.build();
    }
}

export type Builder = MatchPatternGraphBuilder | MatchPatternEdgeBuilder | MatchPatternNodeBuilder;