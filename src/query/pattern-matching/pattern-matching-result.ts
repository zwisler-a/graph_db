import {Node} from "../../graph/node";
import {Edge} from "../../graph/edge";
import {PatternMatchingNode} from "./pattern-matching-graph/pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching-graph/pattern-matching-edge";

export class PatternMatchingResult {

    private static _id = 0;
    private readonly id: number;

    constructor(
        public nodes: { node: Node, match: PatternMatchingNode }[] = [],
        public edges: { edge: Edge, match: PatternMatchingEdge }[] = [],
        public readonly previousIds: number[] = []
    ) {
        this.id = PatternMatchingResult._id++;
    }

    getNodeByAlias(name: string) {
        return this.nodes.find(pair => pair.match.alias === name)?.node;
    }

    filterVisitedEdge() {
        return (edge: Edge) => !this.edges.map(pair => pair.edge).includes(edge);
    }

    filterVisitedMatchingEdge() {
        return (edge: PatternMatchingEdge) => !this.edges.map(pair => pair.match).includes(edge);
    }

    filterVisitedNode() {
        return (node: Node) => !this.nodes.map(pair => pair.node).includes(node);
    }

    filterVisitedMatchingNode() {
        return (node: PatternMatchingNode) => !this.nodes.map(pair => pair.match).includes(node);
    }


    addNode(node: Node, match: PatternMatchingNode) {
        this.nodes.push({node, match});
    }

    addEdge(edge: Edge, match: PatternMatchingEdge) {
        this.edges.push({edge, match});
    }

    fork(): PatternMatchingResult {
        return new PatternMatchingResult(
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