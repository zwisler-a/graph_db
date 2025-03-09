import {Properties, PropertiesMap} from "./properties";
import {generateUUID, UUID} from "../util/uuid";

export class Node extends Properties {

    constructor(
        public readonly id: UUID = generateUUID(),
        public label?: string,
        props?: PropertiesMap
    ) {
        super();
        this.setProperties(props);
    }


    toString(): string {
        return `Node{${this.id}:${JSON.stringify(this.getProperties())}}`;
    }
}