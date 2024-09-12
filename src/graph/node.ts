import {Properties} from "./properties";
import {generateUUID, UUID} from "../util/uuid";
import {Edge} from "./edge";
import {Graph} from "./graph";

export class Node extends Properties {

    public outgoingEdges!: Edge[];
    public incomingEdges!: Edge[];
    private graph!: Graph;

    constructor(
        public readonly id: UUID = generateUUID()
    ) {
        super();
    }

    public setGraph(graph: Graph) {
        this.outgoingEdges = graph.getEdgesStartingAtNode(this);
        this.incomingEdges = graph.getEdgesEndingAtNode(this);
    }

    getEdges(): Edge[] {
        return [...this.incomingEdges, ...this.outgoingEdges];
    }
}