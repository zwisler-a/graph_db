import {GraphQuery} from "../../query";
import {GraphStore} from "../../../store/graph-store";
import {PatternMatchingResult} from "../pattern-matching-result";

export interface PatternMatchingStrategy {
    match(query: GraphQuery, store: GraphStore): PatternMatchingResult[];
}