import {QueryGraph} from "./query-graph";
import {QueryNode} from "./query-node";
import {QueryEdge} from "./query-edge";
import {GraphQuery} from "./query";

export class QueryBuilder {
    private queryGraph: QueryGraph = new QueryGraph([], []);

    private currentNode: QueryNode | null;
    private currentEdge: QueryEdge | null;

    public static with(): QueryBuilder {
        return new QueryBuilder();
    }

    public addNode(attributes: Record<string, string>): QueryBuilder {
        this.currentNode = new QueryNode([], []);
        if (this.currentEdge) {
            this.currentNode.incomingEdges.push(this.currentEdge);
            this.currentEdge.to = this.currentNode;
            this.queryGraph.edges.push(this.currentEdge);
            this.currentEdge = null;
        }
        this.currentNode.setProperties(attributes);
        this.queryGraph.nodes.push(this.currentNode);
        return this;
    }

    public addEdge(attributes: Record<string, string>): QueryBuilder {
        if (!this.currentNode) throw new Error('No currentNode set! Can\'t start query with an edge...')
        this.currentEdge = new QueryEdge(this.currentNode, null);
        this.currentNode = null;
        this.currentEdge.setProperties(attributes);
        return this;
    }


    build(): GraphQuery {
        if (this.currentEdge) throw new Error('No currentNode set! Can\'t terminate query with an edge...')
        if (this.currentEdge) throw new Error('No currentNode set! Can\'t terminate query with an edge...')
        return new GraphQuery(this.queryGraph);
    }
}