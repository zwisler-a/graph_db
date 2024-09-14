import {GraphQuery} from "../query/query";

export interface QueryParser {
    parse(query: string): GraphQuery
}