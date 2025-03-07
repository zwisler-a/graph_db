import {GraphQuery} from "./query";
import {Graph} from "../graph/graph";
import {QueryResult} from "./query-result";
import {GraphStore} from "../store/graph-store";
import {Node} from "../graph/node";
import {AliasStore} from "./alias-store";
import {PatternMatchingResult} from "./pattern-matching/pattern-matching-result";
import {Edge} from "../graph/edge";
import {logger} from "../util/logger";

export class QueryService {

    private constructor(
        private graphStore: GraphStore
    ) {
    }

    public static from(graphStore: GraphStore) {
        return new QueryService(graphStore);
    }


    public query(query: GraphQuery): QueryResult {

        const matchingResult = query.patternMatchingStrategy.match(query, this.graphStore);
        matchingResult.forEach(queryResult => {
            logger.debug(`Query result: ${queryResult.toString()}`);
        })
        const rows: Graph[] = [];

        if (matchingResult.length == 0) this.createEdgesAndNodes(query, new AliasStore());

        matchingResult.forEach(matchingResult => {
            const aliasStore = new AliasStore();
            aliasStore.insert(matchingResult);
            rows.push(this.mapToResult(matchingResult, aliasStore, query));


            this.createEdgesAndNodes(query, aliasStore);

        })


        return new QueryResult(rows);
    }


    private createEdgesAndNodes(query: GraphQuery, aliasStore: AliasStore) {
        if (!query.createPatternGraph) return;
        query.createPatternGraph.nodes.forEach(node => {
            if (node.alias) {
                if (!aliasStore.has(node.alias)) {
                    aliasStore.add(node.alias, node);
                    this.graphStore.addNode(node);
                }
            } else {
                this.graphStore.addNode(node);
            }
        })

        query.createPatternGraph.edges.forEach(edge => {
            const newEdge = new Edge<Node>(edge.from, edge.to, edge.getProperties(), edge.label);
            if (edge.from.alias) newEdge.from = aliasStore.get(edge.from.alias);
            if (edge.to.alias) newEdge.to = aliasStore.get(edge.to.alias);
            this.graphStore.addEdge(newEdge);
        })
    }

    private mapToResult(match: PatternMatchingResult, aliasStore: AliasStore, query: GraphQuery) {
        return new Graph(match.nodes.map(n => n.node), match.edges.map(e => e.edge))
    }

    public contains(query: GraphQuery): boolean {
        return !!this.query(query);
    }

}