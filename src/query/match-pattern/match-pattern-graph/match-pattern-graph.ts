import {MatchPatternNode} from "./match-pattern-node";
import {MatchPatternEdge} from "./match-pattern-edge";
import {Graph} from "../../../graph/graph";

export class MatchPatternGraph extends Graph<MatchPatternNode, MatchPatternEdge> {

    static from(graph: Graph<MatchPatternNode, MatchPatternEdge>): MatchPatternGraph {
        return new MatchPatternGraph(graph.nodes, graph.edges);
    }

    public unionWithAlias(other: Graph<MatchPatternNode, MatchPatternEdge>): MatchPatternGraph {
        const nodeMap = new Map<string, MatchPatternNode>(
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

        return new MatchPatternGraph(nodes, edges);
    }
}