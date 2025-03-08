import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {
    AbbreviatedEdgePatternContext,
    EdgePatternContext,
    FullEdgePatternContext, LabelNameContext
} from "../../../../generated/GQLParser";
import {PatternMatchingEdgeBuilder} from "../../../query/pattern-matching/patten-matching-graph-builder";

export class EdgePatternVisitor extends GQLVisitor<any> {

    constructor(private edgePatternBuilder: PatternMatchingEdgeBuilder) {
        super();
    }

    visitEdgePattern = (ctx: EdgePatternContext) => {

        return this.visitChildren(ctx);
    }

    visitFullEdgePattern = (ctx: FullEdgePatternContext) => {
        if (ctx.fullEdgePointingLeft()) {
            this.edgePatternBuilder.direction = "<";
        }
        if (ctx.fullEdgePointingRight()) {
            this.edgePatternBuilder.direction = ">";
        }
        if (ctx.fullEdgeAnyDirection()) {
            this.edgePatternBuilder.direction = "-";
        }
        return this.visitChildren(ctx);
    }

    visitAbbreviatedEdgePattern = (ctx: AbbreviatedEdgePatternContext) => {
        if (ctx.RIGHT_ARROW()) {
            this.edgePatternBuilder.direction = ">";
        }
        if (ctx.MINUS_SIGN()) {
            this.edgePatternBuilder.direction = "-";
        }
        if (ctx.LEFT_ARROW()) {
            this.edgePatternBuilder.direction = "<";
        }
        return null;
    }

    visitLabelName = (ctx: LabelNameContext) => {
        this.edgePatternBuilder.label = ctx.identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText();
        return this.visitChildren(ctx);
    }


}