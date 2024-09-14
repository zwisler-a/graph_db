import {Token} from "../domain/token";
import {ParseTreeNodeType} from "../domain/parse-tree";
import {OperatorNode} from "../domain/filter/operator-node";

export function parseComparator(token: Token): OperatorNode {
    return {
        type: ParseTreeNodeType.OPERATOR,
        operator: token
    }
}