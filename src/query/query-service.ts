import {GraphStore} from "../store/graph-store";
import {GraphQuery} from "./query";
import {QueryNode} from "./query-node";
import {Node} from "../graph/node";

export class QueryService {

    private constructor(
        private graphStore: GraphStore
    ) {
    }

    public static from(graphStore: GraphStore) {
        return new QueryService(graphStore);
    }


    public query(query: GraphQuery): boolean {
        const graph = this.graphStore.graph;
        for (let queryNode of query.graph.nodes) {
            for (const node of graph.nodes) {
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