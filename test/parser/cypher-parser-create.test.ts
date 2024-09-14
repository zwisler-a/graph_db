import {CypherQueryParser} from "../../src/parser/cypher/cypher-query-parser";
import {describe, expect, test} from '@jest/globals';


describe('Cypher Query Parser create', () => {

    test('parses all nodes match query', () => {
        const cypherQuery: string = `
            CREATE (n:Label {a:1}) 
        `;
        const parseTree = new CypherQueryParser().parse(cypherQuery);
        expect(parseTree.createPatternGraph)
            .toBe("n");

    });

});