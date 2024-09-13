import {QueryParser} from "../query-parser";
import {ParseTree} from "../domain/parse-tree";
import {parseMatchClause} from "./match-clause-parser";
import {captureUntil} from "./util";
import {tokenizeCypher} from "./cypher-tokenizer";
import {parseWhereClause} from "./where-clause-parser";
import {parseReturnClause} from "./return-clause-parser";
import {GraphQueryBuilder} from "../graph-query-builder";

export class CypherQueryParser implements QueryParser {

    private builder: GraphQueryBuilder = new GraphQueryBuilder();

    parse(query: string): any {
        return this.builder.build(this.parseCypher(query));
    }


    parseCypher(query: string): ParseTree {
        const tokens = tokenizeCypher(query);
        const parseTree: ParseTree = {type: 'CypherQuery', children: []};

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i].toUpperCase();
            if (token === 'MATCH') {
                const {endIndex, capture} = captureUntil(i, tokens, ['WHERE', 'RETURN'])
                i = endIndex - 1;
                parseTree.children.push(parseMatchClause(capture));
            } else if (token === 'WHERE') {
                const {endIndex, capture} = captureUntil(i, tokens, ['RETURN'])
                i = endIndex;
                parseTree.children.push(parseWhereClause(capture));
            } else if (token === 'RETURN') {
                const {endIndex, capture} = captureUntil(i, tokens, [])
                i = endIndex;
                parseTree.children.push(parseReturnClause(capture));
            }
        }

        return parseTree;
    }


}