import {InsertPatternNode} from "./insert-pattern-node";
import {InsertPatternEdge} from "./insert-pattern-edge";
import {Graph} from "../../graph/graph";
import {MatchPatternNode} from "../match-pattern/match-pattern-graph/match-pattern-node";
import {MatchPatternEdge} from "../match-pattern/match-pattern-graph/match-pattern-edge";

export class InsertPatternGraph extends Graph<InsertPatternNode, InsertPatternEdge> {


    public unionWithAlias(other: InsertPatternGraph): InsertPatternGraph {
        const nodeMap = new Map<string, InsertPatternNode>(
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

        return new InsertPatternGraph(nodes, edges);
    }

}