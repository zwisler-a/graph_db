import {Node} from "./node";
import {Properties} from "./properties";

export class Edge<N extends Node = Node> extends Properties {
    public label?: string[];
    public from: N
    public to: N

    constructor(
        from: N,
        to: N
    ) {
        super();
        this.from = from;
        this.to = to;
    }
}