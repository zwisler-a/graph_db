import { PatternMatchingStrategy } from "./pattern-matching-strategy";
import { MatchPatternNode } from "../match-pattern-graph/match-pattern-node";
import { Node } from "../../../graph/node";
import { GraphQuery } from "../../query";
import { GraphStore } from "../../../store/graph-store";
import { MatchPatternResult } from "../match-pattern-result";
import { MatchPatternEdge } from "../match-pattern-graph/match-pattern-edge";
import { Edge } from "../../../graph/edge";
import { logger } from "../../../util/logger";

export class NaivePatternMatchingStrategy implements PatternMatchingStrategy {
    match(query: GraphQuery, store: GraphStore): MatchPatternResult[] {
        const patternGraph = query.matchPatternGraph;
        if (!patternGraph || patternGraph.nodes.length === 0) return [];

        const startNodes = patternGraph.getComponents().map(component => component[0]);
        const results: MatchPatternResult[] = [];

        for (const patternNode of startNodes) {
            const seeds = this.findMatchingNodes(patternNode, store.getNodes());
            for (const seed of seeds) {
                results.push(...this.dfs(seed, patternNode, new MatchPatternResult(), query, store));
            }
        }
        return results;
    }

    private dfs(currentNode: Node, patternNode: MatchPatternNode, currentPath: MatchPatternResult, query: GraphQuery, store: GraphStore): MatchPatternResult[] {
        if (!patternNode.matches(currentNode)) return [];
        const path = currentPath.fork();
        path.addNode(currentNode, patternNode);
        logger.debug(`Path: ${path.toString()}`);

        const patternGraph = query.matchPatternGraph!;
        const patternEdges = [
            ...patternGraph.getEdgesStartingAtNode(patternNode),
            ...patternGraph.getEdgesEndingAtNode(patternNode)
        ].filter(path.filterVisitedMatchingEdge());

        if (patternEdges.length === 0) return [path];

        const storeEdges = [
            ...store.getOutgoingEdges(currentNode),
            ...store.getIncomingEdges(currentNode)
        ].filter(path.filterVisitedEdge());

        const results: MatchPatternResult[] = [];
        for (const patternEdge of patternEdges) {
            const nextPatternNode = this.getOtherNodeOfEdge(patternEdge, patternNode);
            const matchingEdges = this.findMatchingEdges(patternEdge, storeEdges);
            for (const edge of matchingEdges) {
                const nextNode = this.getOtherNodeOfEdge(edge, currentNode);
                const newPath = path.fork();
                newPath.addEdge(edge, patternEdge);
                results.push(...this.dfs(nextNode, nextPatternNode, newPath, query, store));
            }
        }
        return results;
    }

    private findMatchingNodes(patternNode: MatchPatternNode, nodes: Node[]): Node[] {
        return nodes.filter(node => patternNode.matches(node));
    }

    private findMatchingEdges(patternEdge: MatchPatternEdge, edges: Edge[]): Edge[] {
        return edges.filter(edge => patternEdge.matches(edge));
    }

    private getOtherNodeOfEdge<T extends Node>(edge: Edge<T>, currentNode: T): T {
        if(edge.from.id === currentNode.id) return edge.to;
        if(edge.to.id === currentNode.id) return edge.from;
        throw new Error(`Cant find node of the other side: ${edge.id}`);
    }
}
