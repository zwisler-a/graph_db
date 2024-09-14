import {describe, expect, test} from '@jest/globals';
import {CypherQueryParser} from "../../src/parser/cypher/cypher-query-parser";
import {QueryService} from "../../src/query/query-service";
import {InMemoryGraphStore} from "../../src/store/in-memory-graph-store";
import {Graph} from "../../src/graph/graph";

describe('Query service match', () => {

    test('all nodes', () => {
        const setupQuery: string = `
            CREATE (alice:Person),(bob:Person),(charlie:Person)
        `;

        const cypherQuery: string = `
            MATCH (n)
        `;
        const parser = new CypherQueryParser();
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(parser.parse(setupQuery));
        const res = queryService.query(parser.parse(cypherQuery));

        expect(res.rawRows.length).toBe(3);
    });

    test('single relation', () => {
        const setupQuery: string = `
            CREATE (alice:Person),(bob:Person),(alice)-[:knows]->(bob)
        `;

        const cypherQuery: string = `
            MATCH (n)-[:knows]->(m)
        `;
        const parser = new CypherQueryParser();
        const graph = new Graph();
        const graphStore = InMemoryGraphStore.from(graph);
        const queryService = QueryService.from(graphStore)

        queryService.query(parser.parse(setupQuery));
        const res = queryService.query(parser.parse(cypherQuery));

        expect(res.rawRows.length).toBe(1);
    });

});