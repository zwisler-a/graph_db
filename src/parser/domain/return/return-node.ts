import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface ReturnNode extends ParseTreeNode {
    type: ParseTreeNodeType.RETURN;
}