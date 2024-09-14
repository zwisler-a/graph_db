
import {PatternMatchingNode} from "./pattern-matching/pattern-matching-graph/pattern-matching-node";
import {PatternMatchingEdge} from "./pattern-matching/pattern-matching-graph/pattern-matching-edge";
import {GraphQuery} from "./query";
import {PatternMatchingGraph} from "./pattern-matching/pattern-matching-graph/pattern-matching-graph";

export class MatchingPatternBuilder {
    private matchPatternGraph: PatternMatchingGraph = new PatternMatchingGraph([], []);

    private currentNode: PatternMatchingNode | null;
    private currentEdge: PatternMatchingEdge | null;

    public static with(): MatchingPatternBuilder {
        return new MatchingPatternBuilder();
    }

    public addNode(attributes: Record<string, string>): MatchingPatternBuilder {
        this.currentNode = new PatternMatchingNode();
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
        this.currentEdge = new PatternMatchingEdge(this.currentNode, null);
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