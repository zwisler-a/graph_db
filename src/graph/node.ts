import {Properties} from "./properties";
import {generateUUID, UUID} from "../util/uuid";

export class Node extends Properties {

    public label?: string[];

    constructor(
        public readonly id: UUID = generateUUID()
    ) {
        super();
    }
}