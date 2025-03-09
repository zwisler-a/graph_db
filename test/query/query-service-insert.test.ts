import {beforeEach, describe, expect, test} from '@jest/globals';
import {QueryService} from "../../src/query/query-service";
import {InMemoryGraphStore} from "../../src/store/in-memory-graph-store";
import {Graph} from "../../src/graph/graph";
import {GraphQLParser} from "../../src/parser/gql-parser";

describe('Query service create', () => {

    const queryParser = new GraphQLParser();
    const graph = new Graph();
    const graphStore = InMemoryGraphStore.from(graph);
    const queryService = QueryService.from(graphStore)

    beforeEach(()=>{
        graphStore.getGraph().nodes = [];
        graphStore.getGraph().edges = [];
    })

    test('create single node', () => {
        const query: string = `
            INSERT (n:Label {a:1})
        `;
        queryService.query(queryParser.parse(query));
        expect(graphStore.getNodes().length).toBe(1);
        queryService.query(queryParser.parse(query));
        expect(graphStore.getNodes().length).toBe(2);
    });

    test('create multiple nodes', () => {
        const query: string = `
            INSERT (n:Label {a:1}), (m:Label {a:2})
        `;

        queryService.query(queryParser.parse(query));
        expect(graphStore.getNodes().length).toBe(2);
        queryService.query(queryParser.parse(query));
        expect(graphStore.getNodes().length).toBe(4);
    });

    test('create edge', () => {
        const query: string = `
            INSERT (n:Label {a:1}), (m:Label {a:2}), (n)-[:knows]->(m)
        `;

        queryService.query(queryParser.parse(query));

        expect(graph.nodes.length).toBe(2);
        expect(graph.edges.length).toBe(1);
        expect(graph.nodes).toContain(graph.edges[0].to);
        expect(graph.nodes).toContain(graph.edges[0].from);
        expect(graph.edges[0].label).toStrictEqual("knows");
    });

    test('create multiple edges', () => {
        const query: string = `
            INSERT (alice:Person), (bob:Person),
                   (charlie:Person), (douglas:Person),
                (alice)-[:knows]->(bob),
                (alice)-[:knows]->(charlie),
                (charlie)-[:knows]->(bob),
                (charlie)-[:knows]->(douglas)
        `;

        queryService.query(queryParser.parse(query));

        expect(graph.nodes.length).toBe(4);
        expect(graph.edges.length).toBe(4);
    });

});