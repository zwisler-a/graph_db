import {Node} from "../graph/node";
import {Edge} from "../graph/edge";
import {Graph} from "../graph/graph";

export interface GraphStore<N = Node, E = Edge> {
    addNode(node: N): void;

    addEdge(node: E): void;

    getNodes(): Node[];

    getOutgoingEdges(node: N): E[];

    getIncomingEdges(node: N): E[];

    getGraph(): Graph;

    /**
     * Removes the node. Fails if it is contained in any edge.
     * @param node
     * @param detach If set also removes the edges
     */
    removeNode(node: N, detach: boolean): void;

    removeEdge(edge: E): void;
}