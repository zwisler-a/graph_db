export enum ParseTreeNodeType {
    MATCH_CLAUSE = "MATCH_CLAUSE",
    CREATE_CLAUSE = "CREATE_CLAUSE",
    WHERE_CLAUSE = "WHERE_CLAUSE",
    PATH_PATTERN = "PATH_PATTERN",
    NODE_PATTERN = "NODE_PATTERN",
    EDGE_PATTERN = "EDGE_PATTERN",
    CONDITION = "CONDITION",
    RETURN = "RETURN",
    RETURN_FIELDS = "RETURN_FIELDS",
    LABEL_EXPRESSION = "LABEL_EXPRESSION",
    PROPERTIES = "PROPERTIES",
    PROPERTY = "PROPERTY",
    VALUE = "VALUE",
    VARIABLE = "VARIABLE",
    ALIAS_DEFINITION = "ALIAS_DEFINITION",
    OPERATOR = "OPERATOR",
    AND = "AND",
    OR = "OR"
}

export interface ParseTreeNode {
    type: ParseTreeNodeType;
    children?: ParseTreeNode[];
}

export interface ParseTree {
    type: string;
    children: ParseTreeNode[];
}