import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {InsertEdgePatternContext, LabelNameContext} from "../../../../generated/GQLParser";
import {CreateEdgeBuilder} from "../../../query/create-graph/create-graph-builder";

export class EdgeInsertPatternVisitor extends GQLVisitor<CreateEdgeBuilder | null> {

    constructor(private edgePatternBuilder: CreateEdgeBuilder) {
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
        const identifier = ctx.identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText();
        if (identifier) {
            this.edgePatternBuilder.label = identifier;
        }
        return null;
    }
}