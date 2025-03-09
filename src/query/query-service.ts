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
        const startTime = Date.now();
        const matchingResults = query.patternMatchingStrategy.match(query, this.graphStore);
        matchingResults.forEach(queryResult => {
            logger.debug(`Query result: ${queryResult.toString()}`);
        })

        // Store variables
        const variableStore = new VariableStore();
        variableStore.insert(matchingResults)

        // Delete Nodes and Edges
        this.executeDeletions(query, variableStore);

        // Insert edges and nodes
        this.executeInserts(query, variableStore);

        // Gather results
        const result = this.createResults(query, matchingResults, variableStore);
        logger.debug(`Query done in: ${Date.now() - startTime}ms`);
        return result;
    }


    private executeInserts(query: GraphQuery, aliasStore: VariableStore) {
        if (!query.insertPatternGraph) return;
        const nodeMap: Record<string, Node> = {};
        query.insertPatternGraph.nodes.forEach(node => {
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

        query.insertPatternGraph.edges.forEach(edge => {
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


    private createResults(query: GraphQuery, matchingResults: MatchPatternResult[], variableStore: VariableStore): QueryResult {
        if (!query.returnPattern) return new QueryResult([]);
        if (query.returnPattern.returnAll) return new QueryResult([
            new Graph(
                matchingResults.flatMap(m => m.nodes.map(mn => mn.node)),
                matchingResults.flatMap(m => m.edges.map(mn => mn.edge)),
            )
        ]);
        const items = query.returnPattern.returnItems;
        const rows = items.map(item => {
            const name = item.variableName ?? '';
            if (item.propertyPath) throw new Error('Not yet implemented');
            if (variableStore.has(name)) {
                const variableTypeNode = variableStore.get<Node>(name, Node.name);
                const variableTypeEdge = variableStore.get<Edge>(name, Edge.name);
                return new Graph(variableTypeNode, variableTypeEdge);
            } else {
                throw new Error(`Variable not found: ${name}`);
            }
        });
        return new QueryResult(rows);

    }

    private executeDeletions(query: GraphQuery, variableStore: VariableStore) {
        query.deletionPattern?.markedForDeletion?.forEach(toDelete => {
            const parts = toDelete.split(".");
            if (parts.length > 1) {
                throw new Error("Not yet supported")
            }
            const rootAlias = parts[0];
            if (!variableStore.has(rootAlias)) throw new Error("Variable not found");
            const type = variableStore.getType(rootAlias);
            if (type == Node.name) {
                const nodes = variableStore.get<Node>(rootAlias);
                nodes.forEach(node => this.graphStore.removeNode(node, query.deletionPattern?.detachDelete ?? false));
            }
            if (type == Edge.name) {
                const edges = variableStore.get<Edge>(rootAlias);
                edges.forEach(node => this.graphStore.removeEdge(node));
            }
        });
    }


}