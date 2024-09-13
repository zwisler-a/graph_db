import {Tokens} from "../domain/token";
import {ParseTreeNode, ParseTreeNodeType} from "../domain/parse-tree";
import {captureUntil} from "./util";
import {parseCondition} from "./condition-parser";

const comparators = ['<', '>', '=']

export function parseWhereClause(tokens: Tokens): ParseTreeNode {
    console.log("where: ", tokens)
    const clause: ParseTreeNode = {type: ParseTreeNodeType.WHERE, children: []}
    let currentPart: ParseTreeNode = clause;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "WHERE") continue;
        const {endIndex, capture} = captureUntil(i, tokens, ['AND', 'OR'])
        i = endIndex;
        if (tokens[i] === "AND") {
            const and = {
                type: ParseTreeNodeType.AND,
                children: []
            };
            currentPart.children?.push(and)
            currentPart = and;
        }
        if (tokens[i] === "OR") {
            const or = {
                type: ParseTreeNodeType.AND,
                children: []
            };
            currentPart.children?.push(or)
            currentPart = or;
        }
        console.log('capture', capture, endIndex, i)
        const condition = parseCondition(capture);
        currentPart.children?.push(condition);

    }


    return clause;
}