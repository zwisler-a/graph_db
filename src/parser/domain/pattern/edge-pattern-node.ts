import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface EdgePatternNode extends ParseTreeNode {
    type: ParseTreeNodeType.EDGE_PATTERN;
}

export function isEdgePatternNode(node: ParseTreeNode): node is EdgePatternNode {
    return node.type === ParseTreeNodeType.EDGE_PATTERN;
}