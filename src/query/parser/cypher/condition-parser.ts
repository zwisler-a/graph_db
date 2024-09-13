import {Tokens} from "../domain/token";
import {ConditionNode, ParseTreeNodeType} from "../domain/parse-tree";
import {parseValue} from "./value-parser";
import {parseComparator} from "./comperator-parser";

export function parseCondition(tokens: Tokens): ConditionNode {
    if (tokens.length !== 3) throw new Error(`Expected 3 tokens in a condition. Got ${tokens.length} (${tokens})`)
    const lhs = parseValue(tokens[0]);
    const comparator = parseComparator(tokens[1]);
    const rhs = parseValue(tokens[2]);
    return {
        type: ParseTreeNodeType.CONDITION,
        children: [
            lhs,
            comparator,
            rhs
        ]
    };
}