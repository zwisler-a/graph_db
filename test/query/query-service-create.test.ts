import {describe, expect, test} from '@jest/globals';
import {CypherQueryParser} from "../../src/parser/cypher/cypher-query-parser";
import {QueryService} from "../../src/query/query-service";
import {InMemoryGraphStore} from "../../src/store/in-memory-graph-store";
import {Graph} from "../../src/graph/graph";

describe('Query service create', () => {

    test('create single node', () => {
        const cypherQuery: string = `
            CREATE (n:Label {a:1})
        `;
        const graphQuery = new CypherQueryParser().parse(cypherQuery);
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(graphQuery);

        expect(graphStore.getNodes().length).toBe(1);
        queryService.query(graphQuery);
        expect(graphStore.getNodes().length).toBe(2);
    });

    test('create multiple nodes', () => {
        const cypherQuery: string = `
            CREATE (n:Label {a:1}), (m:Label {a:2})
        `;

        const graphQuery = new CypherQueryParser().parse(cypherQuery);
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(graphQuery);

        expect(graphStore.getNodes().length).toBe(2);
        queryService.query(graphQuery);
        expect(graphStore.getNodes().length).toBe(4);
    });

    test('create edge', () => {
        const cypherQuery: string = `
            CREATE (n:Label {a:1}), (m:Label {a:2}), (n)-[:knows]->(m)
        `;

        const graphQuery = new CypherQueryParser().parse(cypherQuery);
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(graphQuery);

        expect(graph.nodes.length).toBe(2);
        expect(graph.edges.length).toBe(1);
        expect(graph.nodes).toContain(graph.edges[0].to);
        expect(graph.nodes).toContain(graph.edges[0].from);
        expect(graph.edges[0].label).toStrictEqual(["knows"]);
    });

    test('create multiple edges', () => {
        const cypherQuery: string = `
            CREATE (alice:Person), (bob:Person),
                   (charlie:Person), (douglas:Person)
                (alice)-[:knows]->(bob),
                (alice)-[:knows]->(charlie),
                (charlie)-[:knows]->(bob),
                (charlie)-[:knows]->(douglas),
        `;

        const graphQuery = new CypherQueryParser().parse(cypherQuery);
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(graphQuery);

        expect(graph.nodes.length).toBe(4);
        expect(graph.edges.length).toBe(4);
    });

});