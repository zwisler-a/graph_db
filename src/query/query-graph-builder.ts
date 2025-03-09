
import {MatchPatternNode} from "./match-pattern/match-pattern-graph/match-pattern-node";
import {MatchPatternEdge} from "./match-pattern/match-pattern-graph/match-pattern-edge";
import {GraphQuery} from "./query";
import {MatchPatternGraph} from "./match-pattern/match-pattern-graph/match-pattern-graph";

export class MatchingPatternBuilder {
    private matchPatternGraph: MatchPatternGraph = new MatchPatternGraph([], []);

    private currentNode: MatchPatternNode | null;
    private currentEdge: MatchPatternEdge | null;

    public static with(): MatchingPatternBuilder {
        return new MatchingPatternBuilder();
    }

    public addNode(attributes: Record<string, string>): MatchingPatternBuilder {
        this.currentNode = new MatchPatternNode();
        if (this.currentEdge) {
            this.currentEdge.to = this.currentNode;
            this.matchPatternGraph.edges.push(this.currentEdge);
            this.currentEdge = null;
        }
        this.currentNode.setProperties(attributes);
        this.matchPatternGraph.nodes.push(this.currentNode);
        return this;
    }

    public addEdge(attributes: Record<string, string>): MatchingPatternBuilder {
        if (!this.currentNode) throw new Error('No currentNode set! Can\'t start query with an edge...')
        this.currentEdge = new MatchPatternEdge(this.currentNode, null);
        this.currentNode = null;
        this.currentEdge.setProperties(attributes);
        return this;
    }


    build(): GraphQuery {
        if (this.currentEdge) throw new Error('No currentNode set! Can\'t terminate query with an edge...')
        if (this.currentEdge) throw new Error('No currentNode set! Can\'t terminate query with an edge...')
        return new GraphQuery(this.matchPatternGraph);
    }
}