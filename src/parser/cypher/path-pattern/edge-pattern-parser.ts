import {Tokens} from "../../domain/token";
import {ParseTreeNodeType} from "../../domain/parse-tree";
import {parseProperties} from "../properties-parser";
import {parseLabelAliasPair} from "../label-parser";
import {EdgePatternNode} from "../../domain/pattern/edge-pattern-node";

export function parseEdgePattern(tokens: Tokens): EdgePatternNode {
    const edge: EdgePatternNode = {type: ParseTreeNodeType.EDGE_PATTERN, children: []}

    tokens.forEach((token, controller) => {
        if (token === '[') {
            const capture = controller.captureUntil(["]"]);
            edge.children?.push(...parseLabelAliasPair(capture))
        }
        if (token === '{') {
            const capture = controller.captureUntil(["}"]);
            const properties = parseProperties(capture)
            edge.children?.push(properties);
        }

    })

    return edge;
}