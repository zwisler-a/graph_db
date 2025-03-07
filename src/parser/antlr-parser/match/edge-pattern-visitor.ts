import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {
    AbbreviatedEdgePatternContext,
    EdgePatternContext,
    FullEdgePatternContext
} from "../../../../generated/GQLParser";
import {PatternMatchingEdgeBuilder} from "../../../query/pattern-matching/patten-matching-graph-builder";

export class EdgePatternVisitor extends GQLVisitor<any> {

    constructor(private edgePatternBuilder: PatternMatchingEdgeBuilder) {
        super();
    }

    visitEdgePattern = (ctx: EdgePatternContext) => {
        if (ctx.abbreviatedEdgePattern()) {
            return this.visit(ctx.abbreviatedEdgePattern()!)
        }
        if (ctx.fullEdgePattern()) {
            return this.visit(ctx.fullEdgePattern()!)
        }
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
        return null;
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


}