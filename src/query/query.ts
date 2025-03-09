import {PatternMatchingStrategy} from "./match-pattern/strategies/pattern-matching-strategy";
import {NaivePatternMatchingStrategy} from "./match-pattern/strategies/naive-pattern-matching-strategy";


import {MatchPatternGraph} from "./match-pattern/match-pattern-graph/match-pattern-graph";
import {InsertPatternGraph} from "./insert-pattern-graph/insert-pattern-graph";

export class GraphQuery {

    patternMatchingStrategy: PatternMatchingStrategy = new NaivePatternMatchingStrategy();
    detachDelete = false;

    constructor(
        public matchPatternGraph?: MatchPatternGraph,
        public createPatternGraph?: InsertPatternGraph,
        public markedForDeletion?: string[]
    ) {

    }

    toString(): string {
        return `GraphQuery{ matchPatternGraph: ${this.matchPatternGraph?.toString()}, createPatternGraph: ${this.createPatternGraph?.toString()} }`;
    }
}