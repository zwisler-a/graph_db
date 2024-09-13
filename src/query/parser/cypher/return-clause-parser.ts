import {Tokens} from "../domain/token";
import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";

export function parseReturnClause(tokens: Tokens): ParseTreeNode {

    return {
        type: ParseTreeNodeType.RETURN
    }

}