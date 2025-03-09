import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    BindingVariableContext,
    ElementPatternFillerContext,
    ElementPropertySpecificationContext,
    ElementVariableContext,
    ElementVariableDeclarationContext, LabelNameContext,
    NodePatternContext
} from "../../../generated/GQLParser";
import {MatchPatternNodeBuilder} from "../../query/match-pattern/match-pattern-graph-builder";
import {PropertyVisitor} from "../property/property-visitor";

export class NodePatternVisitor extends GQLVisitor<MatchPatternNodeBuilder| null> {

    constructor(private nodeBuilder: MatchPatternNodeBuilder) {
        super();
    }

    visitNodePattern = (ctx: NodePatternContext) => {
        return this.visit(ctx.elementPatternFiller());
    }

    visitElementPatternFiller = (ctx: ElementPatternFillerContext) => {
        return this.visitChildren(ctx);
    }

    visitElementVariableDeclaration = (ctx: ElementVariableDeclarationContext) => {
        return this.visit(ctx.elementVariable())
    }

    visitElementVariable = (ctx: ElementVariableContext) => {
        return this.visit(ctx.bindingVariable())
    }

    visitBindingVariable = (ctx: BindingVariableContext) => {
        this.nodeBuilder.setAlias(ctx.regularIdentifier()!.REGULAR_IDENTIFIER()!.getText());
        return this.nodeBuilder;
    }

    visitElementPropertySpecification = (ctx: ElementPropertySpecificationContext) => {
        const props = new PropertyVisitor().visit(ctx);
        if (!props) return null;
        Object.keys(props).forEach(propName => {
            this.nodeBuilder.addProperty(propName, props[propName]);
        })
        return null;
    }

    visitLabelName = (ctx: LabelNameContext) => {
        this.nodeBuilder.label = ctx.identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText();
        return this.visitChildren(ctx);
    }

}