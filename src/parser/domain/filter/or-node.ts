import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface OrNode extends ParseTreeNode {
    type: ParseTreeNodeType.OR;
}