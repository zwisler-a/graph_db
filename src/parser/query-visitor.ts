import {GQLVisitor} from "../../generated/GQLVisitor";
import {
    DeleteStatementContext,
    GqlProgramContext,
    InsertStatementContext,
    ReturnStatementContext,
    SimpleMatchStatementContext
} from "../../generated/GQLParser";
import {GraphQuery} from "../query/query";
import {GraphPatternVisitor} from "./match/graph-pattern-visitor";
import {GraphInsertPatternVisitor} from "./insert/graph-insert-pattern-visitor";
import {DeletePatternVisitor} from "./delete/delete-pattern-visitor";
import {ReturnVisitor} from "./return/return-visitor";
import {DeletePattern} from "../query/delete-pattern/delete-pattern";

export class QueryVisitor extends GQLVisitor<GraphQuery | null> {

    private query = new GraphQuery();

    visitGqlProgram = (ctx: GqlProgramContext) => {
        this.visit(ctx.programActivity()!);
        return this.query;
    }

    visitDeleteStatement = (ctx: DeleteStatementContext) => {

        const toDelete = new DeletePatternVisitor().visit(ctx);
        if (toDelete) {
            this.query.deletionPattern = new DeletePattern();
            if (!!ctx.DETACH()) this.query.deletionPattern.detachDelete = true;
            this.query.deletionPattern.markedForDeletion = toDelete;
        }

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
        this.query.insertPatternGraph = createGraph;
        return this.visitChildren(ctx);
    }

    visitReturnStatement = (ctx: ReturnStatementContext) => {
        const returnPattern = new ReturnVisitor().visit(ctx);
        if (!returnPattern) {
            throw new Error("Could not parse return statement");
        }
        this.query.returnPattern = returnPattern;
        return this.visitChildren(ctx);
    }

}