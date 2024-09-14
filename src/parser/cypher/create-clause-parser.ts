import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";
import {Tokens} from "../domain/token";
import {parseNodePattern} from "./path-pattern/node-pattern-parser";
import {captureUntil} from "./util";
import {parseEdgePattern} from "./path-pattern/edge-pattern-parser";

export function parseMatchClause(tokens: Tokens): ParseTreeNode {
    const createNodes: ParseTreeNode[] = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.startsWith('(')) {
            const {endIndex, capture} = captureUntil(i + 1, tokens, [')']);
            i = endIndex;
            const node = parseNodePattern(capture)
            createNodes.push(node);
        }
        if (token.startsWith('-')) {
            const {endIndex, capture} = captureUntil(i, tokens, ['->']);
            i = endIndex;
            const edge = parseEdgePattern(capture)
            createNodes.push(edge);
        }
    }
    return {
        type: ParseTreeNodeType.CREATE,
        children: createNodes
    };
}