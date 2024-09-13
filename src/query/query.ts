import {QueryStrategy} from "./strategies/query-strategy";
import {NaiveQueryStrategy} from "./strategies/query-strategy-native";


import {MatchPatternGraph} from "./match-pattern-graph";

export class GraphQuery {

    patternMatchingStrategy: QueryStrategy = new NaiveQueryStrategy();

    constructor(
        public matchPatternGraph?: MatchPatternGraph,
        public createPatternGraph?: any
    ) {

    }
}