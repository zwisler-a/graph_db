import {Node} from "../../graph/node";
import {Edge} from "../../graph/edge";
import {PatternMatchingNode} from "./pattern-matching-graph/pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching-graph/pattern-matching-edge";

export class PatternMatchingResult<N = Node, E = Edge> {

    constructor(
        public nodes: { node: N, match: PatternMatchingNode }[] = [],
        public edges: { edge: E, match: PatternMatchingEdge }[] = []
    ) {
    }

    getNodeByAlias(name: string) {
        this.nodes.find(pair => pair.match.alias === name)?.node;
    }


    addNode(node: N, match: PatternMatchingNode) {
        this.nodes.push({node, match});
    }

    addEdge(edge: E, match: PatternMatchingEdge) {
        this.edges.push({edge, match});
    }

    fork(): PatternMatchingResult<N, E> {
        return new PatternMatchingResult<N, E>(
            [...this.nodes],
            [...this.edges]
        )
    }

}