import {CypherQueryParser} from "../../src/parser/cypher/cypher-query-parser";
import {describe, expect, test} from '@jest/globals';


describe('Cypher Query Parser match', () => {

    test('parses all nodes match query', () => {
        const cypherQuery: string = `
            MATCH (n) 
        `;
        const parseTree = new CypherQueryParser().parse(cypherQuery);
        expect(parseTree.matchPatternGraph.nodes[0].alias)
            .toBe("n");

    });

    test('parses simple match', () => {

        const cypherQuery = `
            MATCH (n:Person {name: "Alice", age: 30})-[r:KNOWS {since: 2020}]->(m:Person {name: "Bob"}) 
        `;
        const parseTree = new CypherQueryParser().parse(cypherQuery);
        expect(parseTree)
            .toEqual({
                "matchPatternGraph": {
                    "nodes": [{
                        "properties": {"name": "\"Alice\"", "age": "30"},
                        "alias": "n"
                    }, {
                        "properties": {"name": "\"Bob\""},
                        "alias": "m"
                    }],
                    "edges": [{
                        "properties": {"since": "2020"},
                        "from": {
                            "properties": {"name": "\"Alice\"", "age": "30"},
                            "alias": "n"
                        },
                        "to": {
                            "properties": {"name": "\"Bob\""},
                            "alias": "m"
                        }
                    }]
                }, "patternMatchingStrategy": {}
            });

    });

});