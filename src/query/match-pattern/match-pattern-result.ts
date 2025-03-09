import {Node} from "../../graph/node";
import {Edge} from "../../graph/edge";
import {MatchPatternNode} from "./match-pattern-graph/match-pattern-node";
import {MatchPatternEdge} from "./match-pattern-graph/match-pattern-edge";

export class MatchPatternResult {

    private static _id = 0;
    private readonly id: number;

    constructor(
        public nodes: { node: Node, match: MatchPatternNode }[] = [],
        public edges: { edge: Edge, match: MatchPatternEdge }[] = [],
        public readonly previousIds: number[] = []
    ) {
        this.id = MatchPatternResult._id++;
    }

    getNodeByAlias(name: string) {
        return this.nodes.find(pair => pair.match.alias === name)?.node;
    }

    filterVisitedEdge() {
        return (edge: Edge) => !this.edges.map(pair => pair.edge).includes(edge);
    }

    filterVisitedMatchingEdge() {
        return (edge: MatchPatternEdge) => !this.edges.map(pair => pair.match).includes(edge);
    }

    filterVisitedNode() {
        return (node: Node) => !this.nodes.map(pair => pair.node).includes(node);
    }

    filterVisitedMatchingNode() {
        return (node: MatchPatternNode) => !this.nodes.map(pair => pair.match).includes(node);
    }


    addNode(node: Node, match: MatchPatternNode) {
        this.nodes.push({node, match});
    }

    addEdge(edge: Edge, match: MatchPatternEdge) {
        this.edges.push({edge, match});
    }

    fork(): MatchPatternResult {
        return new MatchPatternResult(
            [...this.nodes],
            [...this.edges],
            [...this.previousIds, this.id]
        )
    }

    toString() {
        let str = `[${this.previousIds.join(',')},${this.id}]`;
        for (let i = 0; i < this.nodes.length; i++) {
            str += `(${this.nodes[i].match.alias} ${JSON.stringify(this.nodes[i].node.getProperties())})`;
            if (this.edges[i]) {
                str += `-${this.edges[i].match.label}-`;
            }
        }
        return str;
    }

}