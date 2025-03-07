import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {
    CharacterStringLiteralContext,
    ElementPropertySpecificationContext,
    ExactNumericLiteralContext,
    PropertyKeyValuePairContext,
    UnsignedIntegerContext
} from "../../../../generated/GQLParser";

export class PropertyVisitor extends GQLVisitor<Record<string, any> | null> {

    private currentKey: any;
    private currentValue: any;

    visitElementPropertySpecification = (ctx: ElementPropertySpecificationContext) => {
        const props: any = {};
        ctx.propertyKeyValuePairList().propertyKeyValuePair().forEach((propertyKeyValuePair) => {
            this.visit(propertyKeyValuePair);
            if (this.currentKey && this.currentValue) {
                props[this.currentKey] = this.currentValue;
                this.currentKey = null;
                this.currentValue = null;
            }
        })
        return props;
    }

    visitPropertyKeyValuePair = (ctx: PropertyKeyValuePairContext) => {
        this.currentKey = ctx.propertyName().identifier().regularIdentifier()?.REGULAR_IDENTIFIER()?.getText();
        return this.visitChildren(ctx);
    }

    visitCharacterStringLiteral = (ctx: CharacterStringLiteralContext) => {
        this.currentValue = ctx.DOUBLE_QUOTED_CHARACTER_SEQUENCE()?.getText() ?? ctx.SINGLE_QUOTED_CHARACTER_SEQUENCE()?.getText();
        return this.visitChildren(ctx);
    }

    visitUnsignedInteger = (ctx: UnsignedIntegerContext) => {
        const textInt = ctx.UNSIGNED_DECIMAL_INTEGER()?.getText();
        if(!textInt) return this.visitChildren(ctx);
        this.currentValue = Number.parseInt(textInt);
        return this.visitChildren(ctx);
    }

    visitExactNumericLiteral = (ctx: ExactNumericLiteralContext) => {
        if(ctx.unsignedInteger()) {
            const textInt = ctx.unsignedInteger()?.UNSIGNED_DECIMAL_INTEGER()?.getText();
            if(!textInt) return this.visitChildren(ctx);
            this.currentValue = Number.parseInt(textInt);
            return this.visitChildren(ctx);
        }
        if(ctx.UNSIGNED_DECIMAL_IN_COMMON_NOTATION_WITHOUT_SUFFIX()) {
            const textFloat = ctx.UNSIGNED_DECIMAL_IN_COMMON_NOTATION_WITHOUT_SUFFIX()?.getText();
            if(!textFloat) return this.visitChildren(ctx);
            this.currentValue = Number.parseFloat(textFloat);
            return this.visitChildren(ctx);
        }
        return this.visitChildren(ctx);
    }


}