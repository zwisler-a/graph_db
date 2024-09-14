import {Node} from "../graph/node";
import {Edge} from "../graph/edge";

export interface GraphStore<N = Node, E = Edge> {
    addNode(node: N);

    addEdge(node: E);

    getNodes(): Node[];

    getOutgoingEdges(node: N): E[];

    getIncomingEdges(node: N): E[];

}