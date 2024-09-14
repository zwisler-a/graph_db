import {Tokens} from "../../domain/token";
import {parseNodePattern} from "./node-pattern-parser";
import {parseEdgePattern} from "./edge-pattern-parser";
import {NodePatternNode} from "../../domain/pattern/node-pattern-node";
import {EdgePatternNode} from "../../domain/pattern/edge-pattern-node";

export function parsePathPattern(tokens: Tokens) {
    const pathPattern: (NodePatternNode | EdgePatternNode)[] = [];
    tokens.forEach((token, controller) => {
        if (token.startsWith('(')) {
            const capture = controller.captureUntil([')']);
            const node = parseNodePattern(capture)
            pathPattern.push(node);
        }
        if (token.startsWith('-')) {
            const capture = controller.captureUntil(['->', '-']);
            const edge = parseEdgePattern(capture)
            pathPattern.push(edge);
        }
    });
    return pathPattern;
}