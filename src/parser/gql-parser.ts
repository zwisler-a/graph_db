import {QueryParser} from "./query-parser";
import {GraphQuery} from "../query/query";
import {CharStream, CommonTokenStream} from "antlr4ng";
import {GQLLexer} from "../../generated/GQLLexer";
import {GQLParser} from "../../generated/GQLParser";
import {QueryVisitor} from "./query-visitor";
import {logger} from "../util/logger";

export class GraphQLParser implements QueryParser {
    parse(query: string): GraphQuery {
        const startTime = Date.now();
        const inputStream = CharStream.fromString(query);
        const lexer = new GQLLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new GQLParser(tokenStream);
        const program = parser.gqlProgram();
        const visitor = new QueryVisitor();
        const graphQuery =  visitor.visit(program);
        if(!graphQuery) throw new Error("GraphQL Query parsing failed.");
        logger.debug(`Parsed in ${Date.now() - startTime}ms. GraphQuery: ${graphQuery.toString()}`);
        return graphQuery;
    }

}