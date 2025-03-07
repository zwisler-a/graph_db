import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    AmbientLinearDataModifyingStatementBodyContext,
    AmbientLinearDataModifyingStatementContext,
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
} from "../../../generated/GQLParser";
import {GraphQuery} from "../../query/query";
import {GraphPatternVisitor} from "./match/graph-pattern-visitor";
import {GraphInsertPatternVisitor} from "./insert/graph-insert-pattern-visitor";

export class QueryVisitor extends GQLVisitor<GraphQuery | null> {

    private query = new GraphQuery();

    visitGqlProgram = (ctx: GqlProgramContext) => {
        return this.visit(ctx.programActivity()!);
    }
    visitProgramActivity = (ctx: ProgramActivityContext) => {
        return this.visit(ctx.transactionActivity()!);
    };
    visitTransactionActivity = (ctx: TransactionActivityContext) => {
        return this.visit(ctx.procedureSpecification()!);
    }
    visitProcedureSpecification = (ctx: ProcedureSpecificationContext) => {
        return this.visit(ctx.procedureBody())
    }
    visitProcedureBody = (ctx: ProcedureBodyContext) => {
        return this.visit(ctx.statementBlock())
    }
    visitStatement = (ctx: StatementContext) => {
        return this.visit(ctx.linearDataModifyingStatement()!);
    }
    visitLinearDataModifyingStatement = (ctx: LinearDataModifyingStatementContext) => {
        return this.visit(ctx.ambientLinearDataModifyingStatement()!)
    }
    visitAmbientLinearDataModifyingStatement = (ctx: AmbientLinearDataModifyingStatementContext) => {
        return this.visit(ctx.ambientLinearDataModifyingStatementBody()!)
    }
    visitAmbientLinearDataModifyingStatementBody = (ctx: AmbientLinearDataModifyingStatementBodyContext) => {
        return this.visit(ctx.simpleLinearDataAccessingStatement())
    }
    visitSimpleLinearDataAccessingStatement = (ctx: SimpleLinearDataAccessingStatementContext) => {
        return this.visitChildren(ctx);
    }
    visitSimpleDataModifyingStatement = (ctx: SimpleDataModifyingStatementContext) => {
        return this.visit(ctx.primitiveDataModifyingStatement()!)
    }
    visitPrimitiveDataModifyingStatement = (ctx: PrimitiveDataModifyingStatementContext) => {
        return this.visit(ctx.insertStatement()!)
    }
    visitSimpleQueryStatement = (ctx: SimpleQueryStatementContext) => {
        return this.visit(ctx.primitiveQueryStatement()!);
    }
    visitPrimitiveQueryStatement = (ctx: PrimitiveQueryStatementContext) => {
        return this.visit(ctx.matchStatement()!);
    }
    visitMatchStatement = (ctx: MatchStatementContext) => {
        return this.visit(ctx.simpleMatchStatement()!);
    }
    visitSimpleMatchStatement = (ctx: SimpleMatchStatementContext) => {
        const graphPattern = new GraphPatternVisitor().visit(ctx.graphPatternBindingTable());
        if (!graphPattern) {
            throw new Error("Could not parse simple match statement");
        }
        this.query.matchPatternGraph = graphPattern;
        return this.query;
    }
    visitInsertStatement = (ctx: InsertStatementContext) => {
        const createGraph = new GraphInsertPatternVisitor().visit(ctx.insertGraphPattern());
        if (!createGraph) {
            throw new Error("Could not parse simple insert statement");
        }
        this.query.createPatternGraph = createGraph;
        return this.query;
    }

}