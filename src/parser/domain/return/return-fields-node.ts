import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface ReturnFieldsNode extends ParseTreeNode {
    type: ParseTreeNodeType.RETURN_FIELDS;
}