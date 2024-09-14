import {Edge} from "../../../graph/edge";
import {PatternMatchingNode} from "./pattern-matching-node";

export class PatternMatchingEdge extends Edge<PatternMatchingNode> {

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