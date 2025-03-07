import {PatternMatchingNode} from "./pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching-edge";
import {Graph} from "../../../graph/graph";

export class PatternMatchingGraph extends Graph<PatternMatchingNode, PatternMatchingEdge> {

    static from(graph: Graph<PatternMatchingNode, PatternMatchingEdge>): PatternMatchingGraph {
        return new PatternMatchingGraph(graph.nodes, graph.edges);
    }
}