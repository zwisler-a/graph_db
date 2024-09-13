import {Tokens} from "../domain/token";
import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";
import {captureUntil} from "./util";
import {parseProperties} from "./properties-parser";
import {parseLabel} from "./label-parser";

export function parseEdge(tokens: Tokens): ParseTreeNode {
    const edge: ParseTreeNode = {type: ParseTreeNodeType.EDGE, children: []}

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '{') {
            const {endIndex, capture} = captureUntil(i, tokens, ["}"]);
            i = endIndex;
            const properties = parseProperties(capture)
            edge.children?.push(properties);
        }
        if (tokens[i] === '[') {
            edge.children?.push(...parseLabel([tokens[i + 1]]))
        }

    }

    return edge;
}