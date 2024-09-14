import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";
import {PropertiesNode} from "../property/properties-node";
import {AliasNode} from "../variable/alias-node";
import {LabelExpressionNode} from "../label/label-expression-node";

export interface NodePatternNode extends ParseTreeNode {
    type: ParseTreeNodeType.NODE_PATTERN;
    children: (PropertiesNode | AliasNode | LabelExpressionNode)[];
}

export function isNodePatternNode(node: ParseTreeNode): node is NodePatternNode {
    return node.type === ParseTreeNodeType.NODE_PATTERN;
}