import {describe, expect, test} from '@jest/globals';
import {PatternMatchingNode} from "../../../src/query/pattern-matching/pattern-matching-graph/pattern-matching-node";
import {PatternMatchingEdge} from "../../../src/query/pattern-matching/pattern-matching-graph/pattern-matching-edge";
import {GraphQuery} from "../../../src/query/query";
import {Node} from "../../../src/graph/node";
import {Edge} from "../../../src/graph/edge";
import {Graph} from "../../../src/graph/graph";
import {InMemoryGraphStore} from "../../../src/store/in-memory-graph-store";
import {QueryService} from "../../../src/query/query-service";
import {PatternMatchingGraph} from "../../../src/query/pattern-matching/pattern-matching-graph/pattern-matching-graph";

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


        const qn1 = new PatternMatchingNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new PatternMatchingNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new PatternMatchingEdge(qn2, qn1);
        qn2.outgoingEdges = [qe1];
        qn1.incomingEdges = [qe1];

        const query = new GraphQuery(new PatternMatchingGraph([qn1, qn2], [qe1]));


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


        const qn1 = new PatternMatchingNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new PatternMatchingNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new PatternMatchingEdge(qn2, qn1);
        qn2.outgoingEdges = [qe1];
        qn1.incomingEdges = [qe1];

        const query = new GraphQuery(new PatternMatchingGraph([qn1, qn2], [qe1]));


        expect(queryService.contains(query)).toBe(false);
    });
});