import {Tokens} from "../domain/token";
import {ParseTreeNodeType} from "../domain/parse-tree";
import {LabelExpressionNode} from "../domain/label/label-expression-node";
import {AliasNode} from "../domain/variable/alias-node";

export function parseLabelAliasPair(tokens: Tokens): (AliasNode | LabelExpressionNode)[] {
    if (tokens.length !== 1) throw new Error(`Cant parse label in more than one token ${tokens}`)
    const pair = tokens.get(0).split(":");
    const result: (LabelExpressionNode | AliasNode)[] = [];
    if (pair[0] !== '') {
        result.push({type: ParseTreeNodeType.ALIAS_DEFINITION, name: pair[0]})
    }
    if (pair[1] !== '') {
        result.push({type: ParseTreeNodeType.LABEL_EXPRESSION, label: pair[1]})
    }
    return result;
}