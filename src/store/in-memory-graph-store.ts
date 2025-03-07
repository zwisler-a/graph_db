import {Graph} from "../graph/graph";
import {GraphStore} from "./graph-store";
import {Node} from "../graph/node";
import {Edge} from "../graph/edge";
import {logger} from "../util/logger";

export class InMemoryGraphStore implements GraphStore {

    private constructor(
        public graph: Graph
    ) {
    }

    public static from(graph: Graph): GraphStore {
        return new InMemoryGraphStore(graph);
    }

    addNode(node: Node) {
        if (!this.graph.nodes.includes(node))
            logger.debug(`Node ${node.toString()} added to graph store`);
            this.graph.nodes.push(node);
    }

    addEdge(edge: Edge) {
        if (!this.graph.edges.includes(edge))
            logger.debug(`Edge ${edge} added to graph store`);
            this.graph.edges.push(edge);
    }

    getNodes(): Node[] {
        return this.graph.nodes;
    }

    getIncomingEdges(node: Node) {
        return this.graph.getEdgesEndingAtNode(node);
    }

    getOutgoingEdges(node: Node) {
        return this.graph.getEdgesStartingAtNode(node);
    }

}