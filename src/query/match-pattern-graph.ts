import {QueryNode} from "./query-node";
import {QueryEdge} from "./query-edge";

export class MatchPatternGraph {

    constructor(
        public nodes: QueryNode[],
        public edges: QueryEdge[]
    ) {
    }
}