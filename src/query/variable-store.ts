import {MatchPatternResult} from "./match-pattern/match-pattern-result";
import {Node} from "../graph/node";
import {Edge} from "../graph/edge";

class VariableBag<T = any> {
    constructor(
        public entities: T[],
        public name: string,
        public type: string
    ) {
    }

    add(value: any) {
        if (this.validateType(value)) {
            this.entities.push(value);
        } else {
            throw new Error("Entity contains the wrong type '" + this.type + "' != '" + value.constructor.name + "'");
        }
    }

    validateType(value: any): value is T {
        return value.constructor.name == this.type;
    }
}

export class VariableStore {

    private store: Record<string, VariableBag> = {};


    has(name: string) {
        return !!this.store[name];
    }

    add(name: string, value: (Node | Edge)) {
        if (!this.store[name]) {
            this.store[name] = new VariableBag([value], name, value.constructor.name);
        } else {
            this.store[name].add(value);
        }
    }

    get<T>(name: string, type?: string): T[] {
        if (!type)
            return this.store[name].entities;
        if (this.store[name].type != type) return [];
        return this.store[name].entities;
    }

    getType(name: string): string {
        return this.store[name].type;
    }

    getAllEntities<T>(type: string): T[] {
        return Object.keys(this.store)
            .filter(key => this.store[key].type == type)
            .flatMap((key) => {
                return this.store[key].entities
            })
    }

    insert(matchingResults: MatchPatternResult[]) {
        matchingResults.forEach(matchingResult => {
            matchingResult.nodes.forEach(node => {
                if (node.match.alias) {
                    this.add(node.match.alias, node.node);
                }
            });
            matchingResult.edges.forEach(edge => {
                if (edge.match.alias) {
                    this.add(edge.match.alias, edge.edge)
                }
            });
        });
    }
}