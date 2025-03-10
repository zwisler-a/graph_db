import {GQLVisitor} from "../../../generated/GQLVisitor";
import {InsertEdgePatternContext, LabelNameContext} from "../../../generated/GQLParser";
import {InsertPatternEdgeBuilder} from "../../query/insert-pattern-graph/insert-pattern-graph-builder";

export class EdgeInsertPatternVisitor extends GQLVisitor<InsertPatternEdgeBuilder | null> {

    constructor(private edgePatternBuilder: InsertPatternEdgeBuilder) {
        super();
    }

    visitInsertEdgePattern = (ctx: InsertEdgePatternContext) => {
        if (ctx.insertEdgePointingLeft()) {
            this.edgePatternBuilder.direction = "<";
            return this.visit(ctx.insertEdgePointingLeft()!);
        }
        if (ctx.insertEdgePointingRight()) {
            this.edgePatternBuilder.direction = ">";
            return this.visit(ctx.insertEdgePointingRight()!);
        }
        if (ctx.insertEdgeUndirected()) {
            this.edgePatternBuilder.direction = "-";
            return this.visit(ctx.insertEdgeUndirected()!);
        }
        return null;
    }

    visitLabelName = (ctx: LabelNameContext) => {
        const identifier = ctx.identifier()?.getText();
        if (identifier) {
            this.edgePatternBuilder.label = identifier;
        }
        return null;
    }
}