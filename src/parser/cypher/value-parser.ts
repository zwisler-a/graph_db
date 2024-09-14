import {Token} from "../domain/token";
import {ParseTreeNodeType} from "../domain/parse-tree";
import {ValueNode} from "../domain/property/value-node";
import {VariableNode} from "../domain/variable/variable-node";

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