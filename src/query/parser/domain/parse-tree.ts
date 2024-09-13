export enum ParseTreeNodeType {
    MATCH = "MATCH",
    WHERE = "WHERE",
    CONDITION = "CONDITION",
    RETURN = "RETURN",
    RETURN_FIELDS = "RETURN_FIELDS",
    NODE = "NODE",
    EDGE = "EDGE",
    LABEL = "LABEL",
    PROPERTIES = "PROPERTIES",
    PROPERTY = "PROPERTY",
    VALUE = "VALUE",
    VARIABLE = "VARIABLE",
    VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
    OPERATOR = "OPERATOR",
    AND = "AND",
    OR = "OR",
    CREATE = "CREATE",
}

export interface ParseTreeNode {
    type: ParseTreeNodeType;
    children?: ParseTreeNode[];
}

// Define subtypes for each enum value
export interface MatchNode extends ParseTreeNode {
    type: ParseTreeNodeType.MATCH;
}

export interface WhereNode extends ParseTreeNode {
    type: ParseTreeNodeType.WHERE;
}

export interface ConditionNode extends ParseTreeNode {
    type: ParseTreeNodeType.CONDITION;
}


export interface AndNode extends ParseTreeNode {
    type: ParseTreeNodeType.AND;
}

export interface OrNode extends ParseTreeNode {
    type: ParseTreeNodeType.OR;
}

export interface ReturnNode extends ParseTreeNode {
    type: ParseTreeNodeType.RETURN;
}

export interface ReturnFieldsNode extends ParseTreeNode {
    type: ParseTreeNodeType.RETURN_FIELDS;
}

export interface NodeNode extends ParseTreeNode {
    type: ParseTreeNodeType.NODE;
}

export interface EdgeNode extends ParseTreeNode {
    type: ParseTreeNodeType.EDGE;
}

export interface LabelNode extends ParseTreeNode {
    type: ParseTreeNodeType.LABEL;
    label: string;
}

export interface PropertiesNode extends ParseTreeNode {
    type: ParseTreeNodeType.PROPERTIES;
    children?: PropertyNode[]
}

export interface PropertyNode extends ParseTreeNode {
    type: ParseTreeNodeType.PROPERTY;
    value: any;
    key: string;
}

export interface ValueNode extends ParseTreeNode {
    type: ParseTreeNodeType.VALUE;
    value: any;
}

export interface VariableNode extends ParseTreeNode {
    type: ParseTreeNodeType.VARIABLE;
    value: string;
}

export interface VariableDefinitionNode extends ParseTreeNode {
    type: ParseTreeNodeType.VARIABLE_DEFINITION;
    name: string;
}

export interface OperatorNode extends ParseTreeNode {
    type: ParseTreeNodeType.OPERATOR;
    operator: string;
}

export function isMatchNode(node: ParseTreeNode): node is MatchNode {
    return node.type === ParseTreeNodeType.MATCH;
}

export function isWhereNode(node: ParseTreeNode): node is WhereNode {
    return node.type === ParseTreeNodeType.WHERE;
}

export function isConditionNode(node: ParseTreeNode): node is ConditionNode {
    return node.type === ParseTreeNodeType.CONDITION;
}

export function isReturnNode(node: ParseTreeNode): node is ReturnNode {
    return node.type === ParseTreeNodeType.RETURN;
}

export function isReturnFieldsNode(node: ParseTreeNode): node is ReturnFieldsNode {
    return node.type === ParseTreeNodeType.RETURN_FIELDS;
}

export function isNodeNode(node: ParseTreeNode): node is NodeNode {
    return node.type === ParseTreeNodeType.NODE;
}

export function isEdgeNode(node: ParseTreeNode): node is EdgeNode {
    return node.type === ParseTreeNodeType.EDGE;
}

export function isLabelNode(node: ParseTreeNode): node is LabelNode {
    return node.type === ParseTreeNodeType.LABEL;
}

export function isPropertiesNode(node: ParseTreeNode): node is PropertiesNode {
    return node.type === ParseTreeNodeType.PROPERTIES;
}

export function isPropertyNode(node: ParseTreeNode): node is PropertyNode {
    return node.type === ParseTreeNodeType.PROPERTY;
}

export function isValueNode(node: ParseTreeNode): node is ValueNode {
    return node.type === ParseTreeNodeType.VALUE;
}

export function isVariableNode(node: ParseTreeNode): node is VariableNode {
    return node.type === ParseTreeNodeType.VARIABLE;
}

export function isVariableDefinitionNode(node: ParseTreeNode): node is VariableDefinitionNode {
    return node.type === ParseTreeNodeType.VARIABLE_DEFINITION;
}

export function isOperatorNode(node: ParseTreeNode): node is OperatorNode {
    return node.type === ParseTreeNodeType.OPERATOR;
}


export interface ParseTree {
    type: string;
    children: ParseTreeNode[];
}