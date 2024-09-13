import {QueryStrategy} from "./query-strategy";
import {Graph} from "../../graph/graph";
import {QueryNode} from "../query-node";
import {Node} from "../../graph/node";
import {GraphQuery} from "../query";
import {GraphStore} from "../../store/graph-store";

export class NaiveQueryStrategy implements QueryStrategy {
    match(query: GraphQuery, store: GraphStore): Graph[] {
        throw new Error("Not yet implemented");
    }

    contains(query: GraphQuery, graphStore: GraphStore): boolean {
        for (let queryNode of query.matchPatternGraph.nodes) {
            for (const node of graphStore.graph.nodes) {
                const matching = this.deathFirstSearch(queryNode, node)
                if (matching) return true;
            }
        }

        return false;
    }

    private deathFirstSearch(currentQueryNode: QueryNode, currentNode: Node): boolean {
        if (currentQueryNode.matches(currentNode)) {
            for (const edge of currentQueryNode.outgoingEdges) {
                const foundEdge = edge.find(currentNode.outgoingEdges);
                if (!foundEdge) return false;
                return this.deathFirstSearch(edge.to, foundEdge.to)
            }
            return true;
        }
        return false;
    }

}