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
        // Store variables
        const aliasStore = new VariableStore();
        matchingResult.forEach(matchingResult => aliasStore.insert(matchingResult))

        // Delete Nodes and Edges
        query.markedForDeletion?.forEach(toDelete => {
            this.deleteNodeOrProperty(toDelete, query.detachDelete, aliasStore);
        })

        // Gather results
        matchingResult.forEach(matchingResult => {
            rows.push(this.mapToResult(matchingResult, aliasStore, query));
        })

        // Insert edges and nodes
        this.createEdgesAndNodes(query, aliasStore);


        return new QueryResult(rows);
    }


    private createEdgesAndNodes(query: GraphQuery, aliasStore: VariableStore) {
        if (!query.createPatternGraph) return;
        const nodeMap: Record<string, Node> = {};
        query.createPatternGraph.nodes.forEach(node => {
            const newNode = node.toNode();
            if (node.alias) {
                if (!aliasStore.has(node.alias)) {
                    aliasStore.add(node.alias, newNode);
                    this.graphStore.addNode(newNode);
                }
            } else {
                this.graphStore.addNode(newNode);
            }
            nodeMap[node.id] = newNode;
        })

        query.createPatternGraph.edges.forEach(edge => {
            let foundFrom: Node[] = [edge.from];
            if (edge.from.alias) foundFrom = aliasStore.get(edge.from.alias)
            let foundTo: Node[] = [edge.to];
            if (edge.to.alias) foundTo = aliasStore.get(edge.to.alias)
            if (!edge.from.alias) foundFrom = foundFrom.map(f => nodeMap[f.id]);
            if (!edge.to.alias) foundTo = foundTo.map(f => nodeMap[f.id]);

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