import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface VariableNode extends ParseTreeNode {
    type: ParseTreeNodeType.VARIABLE;
    value: string;
}