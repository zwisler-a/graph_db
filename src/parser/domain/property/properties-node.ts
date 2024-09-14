import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";
import {PropertyNode} from "./property-node";

export interface PropertiesNode extends ParseTreeNode {
    type: ParseTreeNodeType.PROPERTIES;
    children?: PropertyNode[]
}

export function isPropertiesNode(node: ParseTreeNode): node is PropertiesNode {
    return node.type === ParseTreeNodeType.PROPERTIES;
}