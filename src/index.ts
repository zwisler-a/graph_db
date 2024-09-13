import {CypherQueryParser} from "./query/parser/cypher/cypher-query-parser";


const cypherQuery = `
MATCH (n:Person {name: "Alice", age: 30})-[r:KNOWS {since: 2020}]->(m:Person {name: "Bob"}) 
`;
const parseTree = new CypherQueryParser().parse(cypherQuery);
console.log(JSON.stringify(parseTree, null, 2));