import {PatternMatchingStrategy} from "./match-pattern/strategies/pattern-matching-strategy";
import {NaivePatternMatchingStrategy} from "./match-pattern/strategies/naive-pattern-matching-strategy";


import {MatchPatternGraph} from "./match-pattern/match-pattern-graph/match-pattern-graph";
import {InsertPatternGraph} from "./insert-pattern-graph/insert-pattern-graph";
import {ReturnPattern} from "./return-pattern/return-pattern";
import {DeletePattern} from "./delete-pattern/delete-pattern";

export class GraphQuery {

    patternMatchingStrategy: PatternMatchingStrategy = new NaivePatternMatchingStrategy();
    detachDelete = false;

    constructor(
        public matchPatternGraph?: MatchPatternGraph,
        public insertPatternGraph?: InsertPatternGraph,
        public deletionPattern?: DeletePattern,
        public returnPattern?: ReturnPattern
    ) {

    }

    toString()
        :
        string {
        return `GraphQuery{ matchPatternGraph: ${this.matchPatternGraph?.toString()}, createPatternGraph: ${this.insertPatternGraph?.toString()} }`;
    }
}