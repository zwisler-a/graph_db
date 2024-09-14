import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface OperatorNode extends ParseTreeNode {
    type: ParseTreeNodeType.OPERATOR;
    operator: string;
}