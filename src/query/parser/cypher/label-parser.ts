import {Tokens} from "../domain/token";
import {LabelNode, ParseTreeNode, ParseTreeNodeType, VariableDefinitionNode} from "../domain/parse-tree";

export function parseLabel(tokens: Tokens): ParseTreeNode[] {
    if (tokens.length !== 1) throw new Error(`Cant parse label in more than one token ${tokens}`)
    const labelMatch = tokens[0].match(/([^:]+):?([^)]+)?/);
    if (!labelMatch) return [];
    const result: (LabelNode | VariableDefinitionNode)[] = [];
    if (labelMatch[1]) result.push({type: ParseTreeNodeType.VARIABLE_DEFINITION, name: labelMatch[1]})
    if (labelMatch[2]) result.push({type: ParseTreeNodeType.LABEL, label: labelMatch[2]})

    return result;
}