import {beforeEach, describe, expect, test} from '@jest/globals';
import {QueryService} from "../../src/query/query-service";
import {InMemoryGraphStore} from "../../src/store/in-memory-graph-store";
import {Graph} from "../../src/graph/graph";
import {GraphQLParser} from "../../src/parser/gql-parser";

describe('Scenarios', () => {

    const queryParser = new GraphQLParser();
    const graph = new Graph();
    const graphStore = InMemoryGraphStore.from(graph);
    const queryService = QueryService.from(graphStore)


    test('Scenario 1', () => {
        const setupQuery: string = `
            INSERT
              (alice:Person {name: 'Alice', age: 30}),
              (bob:Person {name: 'Bob', age: 35}),
              (charlie:Person {name: 'Charlie', age: 25}),
              (company:Company {name: 'TechCorp'}),
              (proj:Projekt {name: 'Project X'}),
              (alice)-[:WORKS_AT]->(company),
              (bob)-[:WORKS_AT]->(company),
              (charlie)-[:WORKS_AT]->(company),
              (alice)-[:MANAGES]->(proj),
              (bob)-[:WORKS_ON]->(proj),
              (charlie)-[:WORKS_ON]->(proj),
              (alice)-[:FRIENDS_WITH]->(bob),
              (bob)-[:FRIENDS_WITH]->(charlie),
              (charlie)-[:FRIENDS_WITH]->(alice)
        `;

        queryService.query(queryParser.parse(setupQuery));
        expect(graph.nodes.length).toBe(5);
        expect(graph.edges.length).toBe(9);

        const matchQuery: string = `
            MATCH (c {name:'TechCorp'}) <- (b) -> (p {name:'Project X'})
        `;

        let res = queryService.query(queryParser.parse(matchQuery));
        expect(res.graph.nodes.length).toBe(5);
        expect(res.graph.edges.length).toBe(6);

        const insertQuery: string = `
            MATCH (p:Projekt {name: "Project X"})
            INSERT (anki:Person {name: 'Anki', age: 30}), 
                   (leon:Person {name: 'Leon', age: 27}),
                   (anki)-[:OWNS]->(p),
                   (leon)-[:CONSULTS]->(p)
       `
        queryService.query(queryParser.parse(insertQuery));
        expect(graph.nodes.length).toBe(7);
        expect(graph.edges.length).toBe(11);

        const insertRelQuery: string = `
            MATCH (anki {name:"Anki"}), (leon {name:"Leon"})
            INSERT (anki)-[:FRIENDS_WITH]->(leon)
        `;
        queryService.query(queryParser.parse(insertRelQuery));
        expect(graph.nodes.length).toBe(7);
        expect(graph.edges.length).toBe(12);

        const deleteQuery: string = `
        MATCH (n :Person) DETACH DELETE n
        `

        queryService.query(queryParser.parse(deleteQuery));
        expect(graph.nodes.length).toBe(2);
        expect(graph.edges.length).toBe(0);
    });

});