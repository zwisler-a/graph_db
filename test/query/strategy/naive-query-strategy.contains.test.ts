import {describe, expect, test} from '@jest/globals';
import {QueryNode} from "../../../src/query/query-node";
import {QueryEdge} from "../../../src/query/query-edge";
import {GraphQuery} from "../../../src/query/query";
import {Node} from "../../../src/graph/node";
import {Edge} from "../../../src/graph/edge";
import {Graph} from "../../../src/graph/graph";
import {GraphStore} from "../../../src/store/graph-store";
import {QueryService} from "../../../src/query/query-service";
import {MatchPatternGraph} from "../../../src/query/match-pattern-graph";

describe('Naive query strategy contains', () => {
    test('evaluates to true', () => {

        const n1 = new Node();
        n1.setProperty("Name", "A")
        const n2 = new Node();
        n2.setProperty("Name", "B")
        const e1 = new Edge(n1, n2);
        const graph = new Graph([n1, n2], [e1]);

        const store = GraphStore.from(new Graph([n1, n2], [e1]))
        const queryService = QueryService.from(store);


        const qn1 = new QueryNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new QueryNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new QueryEdge(qn2, qn1);
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

        const store = GraphStore.from(new Graph([n1, n2], [e1]))
        const queryService = QueryService.from(store);


        const qn1 = new QueryNode([], []);
        qn1.setProperty("Name", "A")
        const qn2 = new QueryNode([], []);
        qn2.setProperty("Name", "B")
        const qe1 = new QueryEdge(qn2, qn1);
        qn2.outgoingEdges = [qe1];
        qn1.incomingEdges = [qe1];

        const query = new GraphQuery(new MatchPatternGraph([qn1, qn2], [qe1]));


        expect(queryService.contains(query)).toBe(false);
    });
});