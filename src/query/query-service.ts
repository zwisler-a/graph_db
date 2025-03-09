import {GraphQuery} from "./query";
import {Graph} from "../graph/graph";
import {QueryResult} from "./query-result";
import {GraphStore} from "../store/graph-store";
import {Node} from "../graph/node";
import {VariableStore} from "./variable-store";
import {MatchPatternResult} from "./match-pattern/match-pattern-result";
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

        if (matchingResult.length == 0) this.createEdgesAndNodes(query, new VariableStore());
        const aliasStore = new VariableStore();
        matchingResult.forEach(matchingResult => aliasStore.insert(matchingResult))

        query.markedForDeletion?.forEach(toDelete => {
            this.deleteNodeOrProperty(toDelete, query.detachDelete, aliasStore);
        })

        matchingResult.forEach(matchingResult => {
            rows.push(this.mapToResult(matchingResult, aliasStore, query));
            this.createEdgesAndNodes(query, aliasStore);
        })


        return new QueryResult(rows);
    }


    private createEdgesAndNodes(query: GraphQuery, aliasStore: VariableStore) {
        if (!query.createPatternGraph) return;
        query.createPatternGraph.nodes.forEach(node => {
            if (node.alias) {
                if (!aliasStore.has(node.alias)) {
                    aliasStore.add(node.alias, node);
                    this.graphStore.addNode(node.toNode());
                }
            } else {
                this.graphStore.addNode(node.toNode());
            }
        })

        query.createPatternGraph.edges.forEach(edge => {
            let foundFrom = [edge.from];
            if (edge.from.alias) foundFrom = aliasStore.get(edge.from.alias)
            let foundTo = [edge.to];
            if (edge.to.alias) foundTo = aliasStore.get(edge.to.alias)

            foundFrom.forEach(fromNode => {
                foundTo.forEach(toNode => {
                    const newEdge = new Edge<Node>(fromNode, toNode, edge.getProperties(), edge.label);
                    this.graphStore.addEdge(newEdge);
                })
            })
        })
    }

    private mapToResult(match: MatchPatternResult, aliasStore: VariableStore, query: GraphQuery) {
        return new Graph(match.nodes.map(n => n.node), match.edges.map(e => e.edge))
    }

    public contains(query: GraphQuery): boolean {
        return !!this.query(query);
    }

    private deleteNodeOrProperty(toDelete: string, detach: boolean, aliasStore: VariableStore) {
        const parts = toDelete.split(".");
        if (parts.length > 1) {
            throw new Error("Not yet supported")
        }
        const rootAlias = parts[0];
        if (!aliasStore.has(rootAlias)) throw new Error("Variable not found");
        const type = aliasStore.getType(rootAlias);
        if (type == Node.name) {
            const nodes = aliasStore.get<Node>(rootAlias);
            nodes.forEach(node => this.graphStore.removeNode(node, detach));
        }
        if (type == Edge.name) {
            const edges = aliasStore.get<Edge>(rootAlias);
            edges.forEach(node => this.graphStore.removeEdge(node));
        }

    }
}