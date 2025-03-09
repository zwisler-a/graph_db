import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    InsertEdgePatternContext,
    InsertGraphPatternContext,
    InsertNodePatternContext,
    InsertPathPatternContext,
    InsertPathPatternListContext
} from "../../../generated/GQLParser";
import {InsertPatternGraph} from "../../query/insert-pattern-graph/insert-pattern-graph";
import {InsertPatternEdgeBuilder, InsertPatternNodeBuilder} from "../../query/insert-pattern-graph/insert-pattern-graph-builder";
import {NodeInsertPatternVisitor} from "./node-insert-pattern-visitor";
import {EdgeInsertPatternVisitor} from "./edge-insert-pattern-visitor";
import {TerminalNode} from "antlr4ng";

export class GraphInsertPatternVisitor extends GQLVisitor<InsertPatternGraph | null> {

    private nodeBuilder: InsertPatternNodeBuilder | null = null;
    private edgeBuilder: InsertPatternEdgeBuilder | null = null;

    visitInsertGraphPattern = (ctx: InsertGraphPatternContext) => {
        return this.visit(ctx.insertPathPatternList());
    }

    visitInsertPathPatternList = (ctx: InsertPathPatternListContext) => {
        const graphs: InsertPatternGraph[] = [];

        ctx.children.map(pattern => {
            if (pattern instanceof TerminalNode) return;
            this.visit(pattern);
            if (!this.nodeBuilder) throw new Error("No pattern specified");
            const graph = this.nodeBuilder.build();
            graphs.push(graph);
        })
        return graphs.reduce((previousValue, currentValue) =>
                previousValue.unionWithAlias(currentValue),
            new InsertPatternGraph());
    }

    visitInsertPathPattern = (ctx: InsertPathPatternContext) => {
        this.nodeBuilder = new InsertPatternNodeBuilder();
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
            this.edgeBuilder = new InsertPatternEdgeBuilder();
        } else {
            this.edgeBuilder = this.nodeBuilder.createEdge();
        }
        new EdgeInsertPatternVisitor(this.edgeBuilder).visit(ctx);
        return null;
    }

}