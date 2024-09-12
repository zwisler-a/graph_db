import {Node} from "./node";
import {Properties} from "./properties";

export class Edge extends Properties {
    constructor(
        public from: Node,
        public to: Node
    ) {
        super();
    }
}