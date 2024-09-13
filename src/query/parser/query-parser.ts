import {GraphQuery} from "../query";

export interface QueryParser {
    parse(query: string): GraphQuery
}