// Define subtypes for each enum value
import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";
import {PathPatternNode} from "../pattern/path-pattern-node";

export interface MatchClauseNode extends ParseTreeNode {
    type: ParseTreeNodeType.MATCH_CLAUSE;
    children: PathPatternNode[];
}

export function isMatchClauseNode(node: ParseTreeNode): node is MatchClauseNode {
    return node.type === ParseTreeNodeType.MATCH_CLAUSE;
}