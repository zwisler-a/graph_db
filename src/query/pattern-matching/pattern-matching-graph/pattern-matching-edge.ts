import {Edge} from "../../../graph/edge";
import {PatternMatchingNode} from "./pattern-matching-node";

export class PatternMatchingEdge extends Edge<PatternMatchingNode> {

    matches(other: Edge): boolean {
        if (this.label && (other.label != this.label)) return false;
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return this.to.matches(other.to) && this.from.matches(other.from);
    }
}