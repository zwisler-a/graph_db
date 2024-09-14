import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";

export interface LabelExpressionNode extends ParseTreeNode {
    type: ParseTreeNodeType.LABEL_EXPRESSION;
    label: string;
}

export function isLabelExpression(node: ParseTreeNode): node is LabelExpressionNode {
    return node.type == ParseTreeNodeType.LABEL_EXPRESSION;
}