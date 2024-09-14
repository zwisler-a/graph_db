import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface ConditionNode extends ParseTreeNode {
    type: ParseTreeNodeType.CONDITION;
}