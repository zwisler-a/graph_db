import {Node} from "../../../graph/node";

export class MatchPatternNode extends Node {

    alias?: string;

    matches(other: Node): boolean {
        if (this.label && (other.label != this.label)) return false;
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return true;
    }
}