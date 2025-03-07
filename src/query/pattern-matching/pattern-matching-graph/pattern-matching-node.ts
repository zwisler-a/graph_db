import {Node} from "../../../graph/node";

export class PatternMatchingNode extends Node {

    alias?: string;

    matches(other: Node): boolean {
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        return true;
    }
}