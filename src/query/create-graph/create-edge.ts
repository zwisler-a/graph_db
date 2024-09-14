import {Edge} from "../../graph/edge";
import {CreateNode} from "./create-node";

export class CreateEdge extends Edge {

    from: CreateNode;
    to: CreateNode;

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