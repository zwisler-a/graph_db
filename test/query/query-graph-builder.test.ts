import {describe, expect, test} from '@jest/globals';
import {QueryBuilder} from "../../src/query/query-graph-builder";

describe('Query graph builder', () => {
    test('contains correct number of edges and nodes', () => {

        const query = QueryBuilder.with()
            .addNode({})
            .addEdge({})
            .addNode({})
            .build()

        expect(query.matchPatternGraph.nodes.length).toBe(2)
        expect(query.matchPatternGraph.edges.length).toBe(1)

    });

});