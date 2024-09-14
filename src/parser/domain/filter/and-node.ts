import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface AndNode extends ParseTreeNode {
    type: ParseTreeNodeType.AND;
}