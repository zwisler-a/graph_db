// Define subtypes for each enum value
import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";
import {PathPatternNode} from "../pattern/path-pattern-node";

export interface CreateClauseNode extends ParseTreeNode {
    type: ParseTreeNodeType.CREATE_CLAUSE;
    children: PathPatternNode[];
}

export function isCreateClauseNode(node: ParseTreeNode): node is CreateClauseNode {
    return node.type === ParseTreeNodeType.CREATE_CLAUSE;
}