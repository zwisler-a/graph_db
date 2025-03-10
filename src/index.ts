import {GraphQLParser} from "./parser/gql-parser";
import {InMemoryGraphStore} from "./store/in-memory-graph-store";
import {QueryService} from "./query/query-service";
import {GraphBuilder} from "./graph/graph-builder";
import {Graph} from "./graph/graph";

const parser = new GraphQLParser();

const graphStore = InMemoryGraphStore.from(new Graph());
const queryService = QueryService.from(graphStore)

const query = (q:string) => {
    queryService.query(parser.parse(q))
}

query(`INSERT
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
  (charlie)-[:FRIENDS_WITH]->(alice)`);

query(`MATCH (n)-[r]-(m) RETURN n`)