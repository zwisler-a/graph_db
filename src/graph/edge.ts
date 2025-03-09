import {Node} from "./node";
import {Properties, PropertiesMap} from "./properties";
import {generateUUID, UUID} from "../util/uuid";

export class Edge<N extends Node = Node> extends Properties {
    public label?: string;
    public from: N
    public to: N
    public readonly id: UUID = generateUUID()

    constructor(
        from: N,
        to: N,
        props?: PropertiesMap,
        label?: string,
    ) {
        super();
        this.from = from;
        this.to = to;
        this.setProperties(props);
        this.label = label;
    }
}