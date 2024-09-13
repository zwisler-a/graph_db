import {Token} from "../domain/token";
import {ParseTreeNodeType, ValueNode, VariableNode} from "../domain/parse-tree";

export function parseValue(token: Token): ValueNode | VariableNode {

    if (!token.includes(".")) {
        return {
            type: ParseTreeNodeType.VALUE,
            value: token
        }
    } else {
        return {
            type: ParseTreeNodeType.VARIABLE,
            value: token
        }
    }

}