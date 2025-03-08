import {PatternMatchingNode} from "./pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching-edge";
import {Graph} from "../../../graph/graph";

export class PatternMatchingGraph extends Graph<PatternMatchingNode, PatternMatchingEdge> {

    static from(graph: Graph<PatternMatchingNode, PatternMatchingEdge>): PatternMatchingGraph {
        return new PatternMatchingGraph(graph.nodes, graph.edges);
    }

    public union(other: Graph<PatternMatchingNode, PatternMatchingEdge>): Graph<PatternMatchingNode, PatternMatchingEdge> {
        const nodeMap = new Map<string, PatternMatchingNode>(
            this.nodes.map(node => [node.alias ?? node.id, node])
        );

        for (const node of other.nodes) {
            if (!nodeMap.has(node.alias ?? node.id)) {
                nodeMap.set(node.alias ?? node.id, node);
            }
        }

        const nodes = Array.from(nodeMap.values());
        const edges = this.edges.concat(other.edges);
        for (const edge of edges) {
            const fromNode = nodeMap.get(edge.from.alias ?? edge.from.id);
            const toNode = nodeMap.get(edge.to.alias ?? edge.to.id);
            if(!fromNode || !toNode) throw new Error('Could not find node');
            edge.to = toNode;
            edge.from = fromNode;
        }

        return new PatternMatchingGraph(nodes, edges);
    }
}