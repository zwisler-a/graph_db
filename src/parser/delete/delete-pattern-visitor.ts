import {GQLVisitor} from "../../../generated/GQLVisitor";
import {BindingVariableContext, DeleteItemContext} from "../../../generated/GQLParser";

export class DeletePatternVisitor extends GQLVisitor<string[] | null> {

    private expressions: string[] = [];

    visitDeleteItem = (ctx: DeleteItemContext) => {
        const alias = ctx.valueExpression()?.getText();
        if (alias)
            this.expressions.push(alias);
        return this.expressions;
    }

}