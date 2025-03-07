import {PatternMatchingResult} from "./pattern-matching/pattern-matching-result";
import {Node} from "../graph/node";

export class AliasStore {

    private store: Record<string, Node> = {};


    has(alias: string) {
        return !!this.store[alias];
    }

    add(alias:string, value:Node) {
        this.store[alias] = value;
    }

    get(alias: string): Node {
        return this.store[alias];
    }

    insert(matchingResult: PatternMatchingResult) {
        matchingResult.nodes.forEach(node => {
            if(node.match.alias) {
                this.add(node.match.alias, node.node);
            }
        })
    }
}