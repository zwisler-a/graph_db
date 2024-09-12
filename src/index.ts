import {GraphStore} from "./store/graph-store";
import {QueryService} from "./query/query-service";
import {Graph} from "./graph/graph";
import {Node} from "./graph/node";
import {Edge} from "./graph/edge";
import {GraphQuery} from "./query/query";
import {QueryNode} from "./query/query-node";
import {QueryEdge} from "./query/query-edge";
import {QueryGraph} from "./query/query-graph";

const n1 = new Node();
n1.setProperty("Name", "A")
const n2 = new Node();
n2.setProperty("Name", "B")
const e1 = new Edge(n1, n2);
const graph = new Graph([n1, n2], [e1]);

const store = GraphStore.from(new Graph([n1, n2], [e1]))
const queryService = QueryService.from(store);


const qn1 = new QueryNode([], []);
qn1.setProperty("Name", "A")
const qn2 = new QueryNode([], []);
qn2.setProperty("Name", "B")
const qe1 = new QueryEdge(qn2, qn1);
qn2.outgoingEdges = [qe1];
qn1.incomingEdges = [qe1];

const query = new GraphQuery(new QueryGraph([qn1, qn2], [qe1]));


console.log(queryService.query(query));