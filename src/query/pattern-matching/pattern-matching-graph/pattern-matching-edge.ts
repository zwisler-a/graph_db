import {Edge} from "../../../graph/edge";
import {PatternMatchingNode} from "./pattern-matching-node";

export class PatternMatchingEdge extends Edge<PatternMatchingNode> {

    matches(other: Edge): boolean {
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return this.to.matches(other.to) && this.from.matches(other.from);
    }
}