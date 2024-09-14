import {ParseTreeNode, ParseTreeNodeType} from "../../domain/parse-tree";
import {Tokens} from "../../domain/token";
import {parsePathPattern} from "../path-pattern/path-pattern-parser";

export function parseCreateClause(tokens: Tokens): ParseTreeNode {
    return {
        type: ParseTreeNodeType.CREATE_CLAUSE,
        children: parsePathPattern(tokens)
    };
}