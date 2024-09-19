# Open Cypher compatible graph DB
> This is a learning project on how to implement a graph database.
> The base idea here is to have a somewhat functional open cypher implementation
> written in js/ts to be easily compatible with obsidian.md to offer it as a nicer way
> to create the knowledge graphs.


# Example Usage

```ts
const parser = new CypherQueryParser();
const graph = new Graph();
const graphStore = InMemoryGraphStore.from(graph);
const queryService = QueryService.from(graphStore);
const cypherQuery = `CREATE (alice:Person),(bob:Person), (alice)-[:knows]->(bob)`;
queryService.query(parser.parse(cypherQuery))
const res = queryService.query(parser.parse(`MATCH (n:Person)-[:knows]->(m)`));
console.log(JSON.stringify(res, null, 2))
```