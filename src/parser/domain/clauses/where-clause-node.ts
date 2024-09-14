import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface WhereClauseNode extends ParseTreeNode {
    type: ParseTreeNodeType.WHERE_CLAUSE;
}

export function isWhereClauseNode(node: ParseTreeNode): node is WhereClauseNode {
    return node.type === ParseTreeNodeType.WHERE_CLAUSE;
}