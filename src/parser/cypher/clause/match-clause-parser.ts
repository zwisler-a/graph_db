import {ParseTreeNode, ParseTreeNodeType} from "../../domain/parse-tree";
import {Tokens} from "../../domain/token";
import {parsePathPattern} from "../path-pattern/path-pattern-parser";

export function parseMatchClause(tokens: Tokens): ParseTreeNode {
    return {
        type: ParseTreeNodeType.MATCH_CLAUSE,
        children: parsePathPattern(tokens)
    };
}