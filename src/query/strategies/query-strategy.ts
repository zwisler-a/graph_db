import {Graph} from "../../graph/graph";
import {GraphQuery} from "../query";
import {GraphStore} from "../../store/graph-store";

export interface QueryStrategy {
    match(query: GraphQuery, store: GraphStore): Graph[];

    contains(query: GraphQuery, store: GraphStore): boolean;

}