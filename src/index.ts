import {GraphQLParser} from "./parser/gql-parser";
import {InMemoryGraphStore} from "./store/in-memory-graph-store";
import {QueryService} from "./query/query-service";
import {GraphBuilder} from "./graph/graph-builder";

const parser = new GraphQLParser();

const graph = GraphBuilder.startNode({id:1})
    .createEdge().createNode({id:2}).close()
    .createEdge().createNode({id:3}).close()
    .createEdge().createNode({id:4}).close()
    .build()

const graphStore = InMemoryGraphStore.from(graph);
const queryService = QueryService.from(graphStore)

console.log(queryService.query(parser.parse("MATCH (n)->(m)")).toString());