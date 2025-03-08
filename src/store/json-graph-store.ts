import {Graph} from "../graph/graph";
import {GraphStore} from "./graph-store";
import {Node} from "../graph/node";
import {Edge} from "../graph/edge";
import {logger} from "../util/logger";
import * as fs from "node:fs";

export class JsonGraphStore implements GraphStore {

    constructor(
        public graph: Graph,
        private readonly filePath: string
    ) {
        this.retrieveState();
    }

    addNode(node: Node) {
        if (!this.graph.nodes.includes(node)) {
            logger.debug(`Node ${node.toString()} added to graph store`);
            this.graph.nodes.push(node);
            this.saveState();
        }
    }

    addEdge(edge: Edge) {
        if (!this.graph.edges.includes(edge)) {
            logger.debug(`Edge ${edge} added to graph store`);
            this.graph.edges.push(edge);
            this.saveState();
        }
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

    private saveState() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.graph));
    }

    private retrieveState() {
        try {
            const stringGraph = fs.readFileSync(this.filePath).toString();
            const parsed = JSON.parse(stringGraph) as any;
            const nodesMaps = new Map<string, Node>();
            const nodes = parsed.nodes.map((node: any) => {
                const n = new Node(node.id, node.label, node.properties);
                nodesMaps.set(n.id, n);
                return n;
            });
            const edges = parsed.edges.map((edge: any) => new Edge(
                nodesMaps.get(edge.from.id)!,
                nodesMaps.get(edge.to.id)!,
                edge.properties,
                edge.label
            ));
            this.graph = new Graph(nodes, edges);
        } catch (e) {

        }
    }

}