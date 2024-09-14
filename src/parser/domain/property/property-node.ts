import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface PropertyNode extends ParseTreeNode {
    type: ParseTreeNodeType.PROPERTY;
    value: any;
    key: string;
}