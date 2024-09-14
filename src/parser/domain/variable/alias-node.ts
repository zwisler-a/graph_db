import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface AliasNode extends ParseTreeNode {
    type: ParseTreeNodeType.ALIAS_DEFINITION;
    name: string;
}

export function isAliasNode(node: ParseTreeNode): node is AliasNode {
    return node.type === ParseTreeNodeType.ALIAS_DEFINITION;
}