import {Token} from "../domain/token";
import {OperatorNode, ParseTreeNodeType} from "../domain/parse-tree";

export function parseComparator(token: Token): OperatorNode {
    return {
        type: ParseTreeNodeType.OPERATOR,
        operator: token
    }
}