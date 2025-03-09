# Graph DB 
> This is a learning project on how to implement a graph database.
> The base idea here is to have a somewhat functional gql implementation


# Example Usage

```ts
const parser = new CypherQueryParser();
const graph = new Graph();
const graphStore = InMemoryGraphStore.from(graph);
const queryService = QueryService.from(graphStore);
const cypherQuery = `INSERT (alice:Person),(bob:Person), (alice)-[:knows]->(bob)`;
queryService.query(parser.parse(cypherQuery))
const res = queryService.query(parser.parse(`MATCH (n:Person)-[:knows]->(m)`));
console.log(JSON.stringify(res, null, 2))
```

## Getting started
`npm i && npm run ui`

---
![img.png](docs/img.png)
![img.png](docs/img_1.png)