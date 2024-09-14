import {PatternMatchingStrategy} from "./pattern-matching/strategies/pattern-matching-strategy";
import {NaivePatternMatchingStrategy} from "./pattern-matching/strategies/query-strategy-native";


import {PatternMatchingGraph} from "./pattern-matching/pattern-matching-graph/pattern-matching-graph";
import {CreateGraph} from "./create-graph/create-graph";

export class GraphQuery {

    patternMatchingStrategy: PatternMatchingStrategy = new NaivePatternMatchingStrategy();

    constructor(
        public matchPatternGraph?: PatternMatchingGraph,
        public createPatternGraph?: CreateGraph
    ) {

    }
}