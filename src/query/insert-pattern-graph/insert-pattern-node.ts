import {Node} from "../../graph/node";

export class InsertPatternNode extends Node {

    alias?: string;

    toNode() {
        return new Node(this.id, this.label, this.getProperties());
    }

}