import {Node} from "../graph/node";
import {Properties} from "../graph/properties";
import {QueryEdge} from "./query-edge";

export class QueryNode extends Properties {

    variableName: string;

    constructor(
        public incomingEdges: QueryEdge[],
        public outgoingEdges: QueryEdge[]
    ) {
        super();
    }

    public getEdges(): QueryEdge[] {
        return this.incomingEdges.concat(this.outgoingEdges)
    }

    matches(other: Node): boolean {
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return true;
    }
}