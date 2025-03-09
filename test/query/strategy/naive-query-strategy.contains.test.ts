import {describe, expect, test} from '@jest/globals';
import {MatchPatternNode} from "../../../src/query/match-pattern/match-pattern-graph/match-pattern-node";
import {MatchPatternEdge} from "../../../src/query/match-pattern/match-pattern-graph/match-pattern-edge";
import {GraphQuery} from "../../../src/query/query";
import {Node} from "../../../src/graph/node";
import {Edge} from "../../../src/graph/edge";
import {Graph} from "../../../src/graph/graph";
import {InMemoryGraphStore} from "../../../src/store/in-memory-graph-store";
import {QueryService} from "../../../src/query/query-service";
import {MatchPatternGraph} from "../../../src/query/match-pattern/match-pattern-graph/match-pattern-graph";

describe('Naive query strategy contains', () => {
    test('evaluates to true', () => {

        const n1 = new Node();
        n1.setProperty("Name", "A")
        const n2 = new Node();
        n2.setProperty("Name", "B")
        const e1 = new Edge(n1, n2);
        const graph = new Graph([n1, n2], [e1]);

        const store = InMemoryGraphStore.from(new Graph([n1, n2], [e1]))
        const queryService = QueryService.from(store);


        const qn1 = new MatchPatternNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new MatchPatternNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new MatchPatternEdge(qn2, qn1);
        qn2.outgoingEdges = [qe1];
        qn1.incomingEdges = [qe1];

        const query = new GraphQuery(new MatchPatternGraph([qn1, qn2], [qe1]));


        expect(queryService.contains(query)).toBe(true);
    });

    test('evaluates to false', () => {

        const n1 = new Node();
        n1.setProperty("Name", "A")
        const n2 = new Node();
        n2.setProperty("Name", "C")
        const e1 = new Edge(n1, n2);
        const graph = new Graph([n1, n2], [e1]);

        const store = InMemoryGraphStore.from(new Graph([n1, n2], [e1]))
        const queryService = QueryService.from(store);


        const qn1 = new MatchPatternNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new MatchPatternNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new MatchPatternEdge(qn2, qn1);
        qn2.outgoingEdges = [qe1];
        qn1.incomingEdges = [qe1];

        const query = new GraphQuery(new MatchPatternGraph([qn1, qn2], [qe1]));


        expect(queryService.contains(query)).toBe(false);
    });
});