import {PatternMatchingStrategy} from "./pattern-matching-strategy";
import {PatternMatchingNode} from "../pattern-matching-graph/pattern-matching-node";
import {Node} from "../../../graph/node";
import {GraphQuery} from "../../query";
import {GraphStore} from "../../../store/graph-store";
import {PatternMatchingResult} from "../pattern-matching-result";
import {PatternMatchingEdge} from "../pattern-matching-graph/pattern-matching-edge";
import {Edge} from "../../../graph/edge";

/**
 * - Pick random starting point and build from there
 */
export class NaivePatternMatchingStrategy implements PatternMatchingStrategy {


    match(query: GraphQuery, store: GraphStore): PatternMatchingResult[] {
        if (query.matchPatternGraph.nodes.length === 0) return [];
        const startMatchingNode = query.matchPatternGraph.nodes[0]
        const seedNodes = this.findMatchingNode(startMatchingNode, store.getNodes());
        const rootPath = new PatternMatchingResult();
        return seedNodes.flatMap(seedNode => {
            return this.dfs(seedNode, startMatchingNode, rootPath.fork(), query, store);
        });
    }


    private dfs(currentNode: Node, currentMatchingNode: PatternMatchingNode, currentPath: PatternMatchingResult, query: GraphQuery, store: GraphStore): PatternMatchingResult[] {
        if (!currentMatchingNode.matches(currentNode)) return [];
        currentPath.addNode(currentNode, currentMatchingNode);
        const matchingEdges = query.matchPatternGraph.getEdgesStartingAtNode(currentMatchingNode);
        if (matchingEdges.length == 0) return [currentPath];
        const edges = store.getOutgoingEdges(currentNode);
        return matchingEdges.flatMap(matchingEdge => {
            const nextMatchingNode = matchingEdge.to;
            const matchedEdges = this.findMatchingEdge(matchingEdge, edges);
            return matchedEdges.flatMap(matchedEdge => {
                const nextNode = matchedEdge.to;
                currentPath.addEdge(matchedEdge, matchingEdge);
                return this.dfs(nextNode, nextMatchingNode, currentPath.fork(), query, store);
            })
        })
    }

    private findMatchingNode(patternNode: PatternMatchingNode, nodes: Node[]) {
        return nodes.filter(node => patternNode.matches(node))
    }

    private findMatchingEdge(patternEdge: PatternMatchingEdge, nodes: Edge[]) {
        return nodes.filter(node => patternEdge.matches(node))
    }

}