import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {
    InsertEdgePatternContext,
    InsertGraphPatternContext,
    InsertNodePatternContext,
    InsertPathPatternContext,
    InsertPathPatternListContext
} from "../../../../generated/GQLParser";
import {CreateGraph} from "../../../query/create-graph/create-graph";
import {CreateEdgeBuilder, CreateNodeBuilder} from "../../../query/create-graph/create-graph-builder";
import {NodeInsertPatternVisitor} from "./node-insert-pattern-visitor";
import {EdgeInsertPatternVisitor} from "./edge-insert-pattern-visitor";
import {TerminalNode} from "antlr4ng";

export class GraphInsertPatternVisitor extends GQLVisitor<CreateGraph | null> {

    private nodeBuilder: CreateNodeBuilder | null = null;
    private edgeBuilder: CreateEdgeBuilder | null = null;

    visitInsertGraphPattern = (ctx: InsertGraphPatternContext) => {
        return this.visit(ctx.insertPathPatternList());
    }

    visitInsertPathPatternList = (ctx: InsertPathPatternListContext) => {
        const graphs: CreateGraph[] = [];

        ctx.children.map(pattern => {
            if (pattern instanceof TerminalNode) return;
            this.visit(pattern);
            if (!this.nodeBuilder) throw new Error("No pattern specified");
            const graph = this.nodeBuilder.build();
            graphs.push(graph);
        })
        return graphs.reduce((previousValue, currentValue) =>
                previousValue.union(currentValue),
            new CreateGraph());
    }

    visitInsertPathPattern = (ctx: InsertPathPatternContext) => {
        this.nodeBuilder = new CreateNodeBuilder();
        this.edgeBuilder = null;
        return this.visitChildren(ctx);
    }


    visitInsertNodePattern = (ctx: InsertNodePatternContext) => {
        if (this.edgeBuilder) {
            this.nodeBuilder = this.edgeBuilder.createNode();
        }
        new NodeInsertPatternVisitor(this.nodeBuilder!).visit(ctx);
        return null;
    }

    visitInsertEdgePattern = (ctx: InsertEdgePatternContext) => {
        if (!this.nodeBuilder) {
            this.edgeBuilder = new CreateEdgeBuilder();
        } else {
            this.edgeBuilder = this.nodeBuilder.createEdge();
        }
        new EdgeInsertPatternVisitor(this.edgeBuilder).visit(ctx);
        return null;
    }

}