import {Tokens} from "../domain/token";
import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";
import {captureUntil} from "./util";
import {parseProperties} from "./properties-parser";
import {parseLabel} from "./label-parser";

export function parseNode(tokens: Tokens): ParseTreeNode {

    const node: ParseTreeNode = {
        type: ParseTreeNodeType.NODE,
        children: []
    };


    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '{') {
            const {endIndex, capture} = captureUntil(i, tokens, ["}"]);
            i = endIndex;
            const properties = parseProperties(capture)
            node.children?.push(properties);
        } else {
            node.children?.push(...parseLabel([tokens[i]]))
        }

    }

    return node;
}