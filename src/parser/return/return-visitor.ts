import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    BindingVariableContext, PropertyNameContext,
    ReturnItemContext,
    ReturnStatementBodyContext,
    ReturnStatementContext
} from "../../../generated/GQLParser";
import {ReturnItem, ReturnPattern} from "../../query/return-pattern/return-pattern";

export class ReturnVisitor extends GQLVisitor<any | null> {

    private returnPattern = new ReturnPattern();
    private currentReturnItem?: ReturnItem = undefined;

    visitReturnStatement = (ctx: ReturnStatementContext) => {
        this.visitChildren(ctx);
        if(this.currentReturnItem) {
            this.returnPattern.returnItems.push(this.currentReturnItem);
        }
        return this.returnPattern;
    }

    visitReturnStatementBody = (ctx: ReturnStatementBodyContext) => {
        if (ctx.ASTERISK()) {
            this.returnPattern.returnAll = true;
            return this.returnPattern;
        }
        return this.visitChildren(ctx);
    }

    visitReturnItem = (ctx: ReturnItemContext) => {
        if(this.currentReturnItem) {
            this.returnPattern.returnItems.push(this.currentReturnItem);
        }
        this.currentReturnItem = new ReturnItem();
        return this.visitChildren(ctx);
    }

    visitBindingVariable = (ctx: BindingVariableContext) => {
        if (!this.currentReturnItem || this.currentReturnItem.variableName) return this.visitChildren(ctx);
        this.currentReturnItem.variableName = ctx.regularIdentifier().getText();
    }

    visitPropertyName = (ctx: PropertyNameContext) => {
        if (!this.currentReturnItem || !this.currentReturnItem.variableName) return this.visitChildren(ctx);
        if (!this.currentReturnItem.propertyPath) this.currentReturnItem.propertyPath = [];
        this.currentReturnItem.propertyPath?.push(ctx.identifier().getText())
    }

}