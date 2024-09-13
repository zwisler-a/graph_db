import {GraphStore} from "../store/graph-store";
import {GraphQuery} from "./query";
import {Graph} from "../graph/graph";

export class QueryService {

    private constructor(
        private graphStore: GraphStore
    ) {
    }

    public static from(graphStore: GraphStore) {
        return new QueryService(graphStore);
    }


    public query(query: GraphQuery): Graph[] {
        if (query.patternMatchingStrategy) {
            return query.patternMatchingStrategy.match(query, this.graphStore)
        }
    }

    public contains(query: GraphQuery): boolean {
        if (query.patternMatchingStrategy) {
            return query.patternMatchingStrategy.contains(query, this.graphStore)
        }
    }

}