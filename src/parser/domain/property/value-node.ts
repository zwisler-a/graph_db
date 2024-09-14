import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface ValueNode extends ParseTreeNode {
    type: ParseTreeNodeType.VALUE;
    value: any;
}