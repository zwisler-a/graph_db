import {Edge} from "../graph/edge";
import {QueryNode} from "./query-node";
import {Properties} from "../graph/properties";

export class QueryEdge extends Properties {
    constructor(
        public from: QueryNode,
        public to: QueryNode
    ) {
        super();
    }


    matches(other: Edge): boolean {
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return true;
    }

    find(others: Edge[]) {
        return others.find(o => this.matches(o))
    }
}