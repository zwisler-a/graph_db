import {GraphQuery} from "../../query";
import {GraphStore} from "../../../store/graph-store";
import {MatchPatternResult} from "../match-pattern-result";

export interface PatternMatchingStrategy {
    match(query: GraphQuery, store: GraphStore): MatchPatternResult[];
}