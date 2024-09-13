import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";
import {Tokens} from "../domain/token";
import {parseNode} from "./node-parser";
import {captureUntil} from "./util";
import {parseEdge} from "./edge-parser";

export function parseMatchClause(tokens: Tokens): ParseTreeNode {
    const matchNodes: ParseTreeNode[] = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.startsWith('(')) {
            const {endIndex, capture} = captureUntil(i + 1, tokens, [')']);
            i = endIndex;
            const node = parseNode(capture)
            matchNodes.push(node);
        }
        if (token.startsWith('-')) {
            const {endIndex, capture} = captureUntil(i, tokens, ['->']);
            i = endIndex;
            const edge = parseEdge(capture)
            matchNodes.push(edge);
        }
    }
    return {
        type: ParseTreeNodeType.MATCH,
        children: matchNodes
    };
}