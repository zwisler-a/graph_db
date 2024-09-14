import {Tokens} from "../../domain/token";
import {ParseTreeNodeType} from "../../domain/parse-tree";
import {parseProperties} from "../properties-parser";
import {parseLabelAliasPair} from "../label-parser";
import {NodePatternNode} from "../../domain/pattern/node-pattern-node";

export function parseNodePattern(tokens: Tokens): NodePatternNode {

    const node: NodePatternNode = {
        type: ParseTreeNodeType.NODE_PATTERN,
        children: []
    };

    tokens.forEach((token, controller) => {
        if (token === '{') {
            const  capture = controller.captureUntil(["}"]);
            const properties = parseProperties(capture)
            node.children?.push(properties);
        } else {
            node.children?.push(...parseLabelAliasPair(Tokens.of(token)))
        }
    })

    return node;
}