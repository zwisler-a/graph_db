import {GQLVisitor} from "../../generated/GQLVisitor";
import {
    AmbientLinearDataModifyingStatementBodyContext,
    AmbientLinearDataModifyingStatementContext, DeleteStatementContext,
    GqlProgramContext,
    InsertStatementContext,
    LinearDataModifyingStatementContext,
    MatchStatementContext,
    PrimitiveDataModifyingStatementContext,
    PrimitiveQueryStatementContext,
    ProcedureBodyContext,
    ProcedureSpecificationContext,
    ProgramActivityContext,
    SimpleDataModifyingStatementContext,
    SimpleLinearDataAccessingStatementContext,
    SimpleMatchStatementContext,
    SimpleQueryStatementContext,
    StatementContext,
    TransactionActivityContext
} from "../../generated/GQLParser";
import {GraphQuery} from "../query/query";
import {GraphPatternVisitor} from "./match/graph-pattern-visitor";
import {GraphInsertPatternVisitor} from "./insert/graph-insert-pattern-visitor";
import {DeletePatternVisitor} from "./delete/delete-pattern-visitor";
import {query} from "winston";

export class QueryVisitor extends GQLVisitor<GraphQuery | null> {

    private query = new GraphQuery();

    visitGqlProgram = (ctx: GqlProgramContext) => {
        this.visit(ctx.programActivity()!);
        return this.query;
    }

    visitDeleteStatement = (ctx: DeleteStatementContext) => {
        if(!!ctx.DETACH()) this.query.detachDelete = true;
        const toDelete = new DeletePatternVisitor().visit(ctx);
        if (toDelete) this.query.markedForDeletion = toDelete;
        return this.visitChildren(ctx);
    }

    visitSimpleMatchStatement = (ctx: SimpleMatchStatementContext) => {
        const graphPattern = new GraphPatternVisitor().visit(ctx.graphPatternBindingTable());
        if (!graphPattern) {
            throw new Error("Could not parse simple match statement");
        }
        this.query.matchPatternGraph = graphPattern;
        return this.visitChildren(ctx);
    }
    visitInsertStatement = (ctx: InsertStatementContext) => {
        const createGraph = new GraphInsertPatternVisitor().visit(ctx.insertGraphPattern());
        if (!createGraph) {
            throw new Error("Could not parse simple insert statement");
        }
        this.query.createPatternGraph = createGraph;
        return this.visitChildren(ctx);
    }

}