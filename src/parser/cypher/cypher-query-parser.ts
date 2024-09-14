import {QueryParser} from "../query-parser";
import {ParseTree} from "../domain/parse-tree";
import {parseMatchClause} from "./clause/match-clause-parser";
import {tokenizeCypher} from "./cypher-tokenizer";
import {parseWhereClause} from "./clause/where-clause-parser";
import {parseReturnClause} from "./clause/return-clause-parser";
import {GraphQueryBuilder} from "../../query/query-builder/graph-query-builder";
import {GraphQuery} from "../../query/query";
import {Tokens} from "../domain/token";
import {parseCreateClause} from "./clause/create-clause-parser";

export class CypherQueryParser implements QueryParser {

    private builder: GraphQueryBuilder = new GraphQueryBuilder();

    parse(query: string): GraphQuery {
        return this.builder.build(this.parseCypher(query));
    }


    parseCypher(query: string): ParseTree {
        const tokens = Tokens.of(...tokenizeCypher(query));
        const parseTree: ParseTree = {type: 'CypherQuery', children: []};

        tokens.forEach((token, controller) => {
            if (token === 'MATCH') {
                const capture = controller.captureUntil(['WHERE', 'RETURN', 'CREATE'])
                parseTree.children.push(parseMatchClause(capture));
            } else if (token === 'CREATE') {
                const capture = controller.captureUntil(['RETURN', 'WHERE'])
                parseTree.children.push(parseCreateClause(capture));
            } else if (token === 'WHERE') {
                const capture = controller.captureUntil(['RETURN'])
                parseTree.children.push(parseWhereClause(capture));
            } else if (token === 'RETURN') {
                const capture = controller.captureUntil([])
                parseTree.children.push(parseReturnClause(capture));
            }
        })

        return parseTree;
    }


}