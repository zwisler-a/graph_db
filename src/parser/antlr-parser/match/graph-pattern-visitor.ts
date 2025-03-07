import {GQLVisitor} from "../../../../generated/GQLVisitor";
import {
    EdgePatternContext,
    GraphPatternBindingTableContext,
    NodePatternContext,
    PathPatternListContext
} from "../../../../generated/GQLParser";
import {PatternMatchingGraph} from "../../../query/pattern-matching/pattern-matching-graph/pattern-matching-graph";
import {NodePatternVisitor} from "./node-pattern-visitor";
import {
    PatternMatchingEdgeBuilder,
    PatternMatchingNodeBuilder
} from "../../../query/pattern-matching/patten-matching-graph-builder";
import {EdgePatternVisitor} from "./edge-pattern-visitor";

export class GraphPatternVisitor extends GQLVisitor<PatternMatchingGraph | null> {

    private nodeBuilder: PatternMatchingNodeBuilder | null = null;
    private edgeBuilder: PatternMatchingEdgeBuilder | null = null;

    visitGraphPatternBindingTable = (ctx: GraphPatternBindingTableContext) => {
        return this.visit(ctx.graphPattern());
    }
    visitPathPatternList = (ctx: PathPatternListContext) => {
        const graphs: PatternMatchingGraph[] = [];
        ctx.pathPattern().map(pattern => {

            this.visit(pattern);
            if (!this.nodeBuilder) throw new Error("No pattern specified");
            const graph = this.nodeBuilder.build();
            graphs.push(graph);
        })
        return graphs.reduce((previousValue, currentValue) =>
                previousValue.union(currentValue),
            new PatternMatchingGraph());
    }

    visitNodePattern = (ctx: NodePatternContext) => {
        if (!this.edgeBuilder) {
            this.nodeBuilder = new PatternMatchingNodeBuilder();
        } else {
            this.nodeBuilder = this.edgeBuilder.createNode();
        }
        new NodePatternVisitor(this.nodeBuilder).visit(ctx);
        return null;
    }

    visitEdgePattern = (ctx: EdgePatternContext) => {
        if (!this.nodeBuilder) {
            this.edgeBuilder = new PatternMatchingEdgeBuilder({});
        } else {
            this.edgeBuilder = this.nodeBuilder.createEdge();
        }
        new EdgePatternVisitor(this.edgeBuilder).visit(ctx);
        return null;
    }

}