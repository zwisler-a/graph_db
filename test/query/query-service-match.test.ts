import {beforeEach, describe, expect, test} from '@jest/globals';
import {QueryService} from "../../src/query/query-service";
import {InMemoryGraphStore} from "../../src/store/in-memory-graph-store";
import {Graph} from "../../src/graph/graph";
import {GraphQLParser} from "../../src/parser/gql-parser";

describe('Query service match', () => {

    const queryParser = new GraphQLParser();
    const graph = new Graph();
    const graphStore = InMemoryGraphStore.from(graph);
    const queryService = QueryService.from(graphStore)

    beforeEach(() => {
        graphStore.getGraph().nodes = [];
        graphStore.getGraph().edges = [];
    })

    test('all nodes', () => {
        const setupQuery: string = `
            INSERT (alice:Person),(bob:Person),(charlie:Person)
        `;

        const matchQuery: string = `
            MATCH (n)
        `;

        queryService.query(queryParser.parse(setupQuery));
        const res = queryService.query(queryParser.parse(matchQuery));

        expect(res.rawRows.length).toBe(3);
    });

    test('single relation', () => {
        const setupQuery: string = `
            INSERT (alice:Person),(bob:Person),(alice)-[:knows]->(bob)
        `;

        const cypherQuery: string = `
            MATCH (n)-[:knows]->(m)
        `;

        queryService.query(queryParser.parse(setupQuery));
        const res = queryService.query(queryParser.parse(cypherQuery));

        expect(res.graph.edges.length).toBe(1);
        expect(res.graph.nodes.length).toBe(2);
    });

});