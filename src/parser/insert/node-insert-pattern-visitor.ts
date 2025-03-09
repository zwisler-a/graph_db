import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    BindingVariableContext,
    ElementPropertySpecificationContext,
    ElementVariableContext,
    ElementVariableDeclarationContext,
    InsertElementPatternFillerContext,
    InsertNodePatternContext,
    LabelNameContext,
    PropertyKeyValuePairContext
} from "../../../generated/GQLParser";
import {InsertPatternNodeBuilder} from "../../query/insert-pattern-graph/insert-pattern-graph-builder";
import {PropertyVisitor} from "../property/property-visitor";

export class NodeInsertPatternVisitor extends GQLVisitor<InsertPatternNodeBuilder | null> {

    constructor(private nodeBuilder: InsertPatternNodeBuilder) {
        super();
    }

    visitInsertNodePattern = (ctx: InsertNodePatternContext) => {
        return this.visit(ctx.insertElementPatternFiller()!);
    }

    visitInsertElementPatternFiller = (ctx: InsertElementPatternFillerContext) => {
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

    visitLabelName = (ctx: LabelNameContext) => {
        this.nodeBuilder.label = (ctx.identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText());
        return null;
    }

    visitPropertyKeyValuePair = (ctx: PropertyKeyValuePairContext) => {
        const key = ctx.propertyName().identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText();
        const value = ctx.valueExpression().getText();
        if (key && value) {
            this.nodeBuilder.addProperty(key, value);
        }
        return null;
    }

    visitElementPropertySpecification = (ctx: ElementPropertySpecificationContext) => {
        const props = new PropertyVisitor().visit(ctx);
        if (!props) return null;
        Object.keys(props).forEach(propName => {
            this.nodeBuilder.addProperty(propName, props[propName]);
        })
        return null;
    }


}