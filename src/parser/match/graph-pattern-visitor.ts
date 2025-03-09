import {GQLVisitor} from "../../../generated/GQLVisitor";
import {
    EdgePatternContext,
    GraphPatternBindingTableContext, LabelNameContext,
    NodePatternContext,
    PathPatternListContext
} from "../../../generated/GQLParser";
import {MatchPatternGraph} from "../../query/match-pattern/match-pattern-graph/match-pattern-graph";
import {NodePatternVisitor} from "./node-pattern-visitor";
import {
    MatchPatternEdgeBuilder,
    MatchPatternNodeBuilder
} from "../../query/match-pattern/match-pattern-graph-builder";
import {EdgePatternVisitor} from "./edge-pattern-visitor";

export class GraphPatternVisitor extends GQLVisitor<MatchPatternGraph | null> {

    private nodeBuilder: MatchPatternNodeBuilder | null = null;
    private edgeBuilder: MatchPatternEdgeBuilder | null = null;

    visitGraphPatternBindingTable = (ctx: GraphPatternBindingTableContext) => {
        return this.visit(ctx.graphPattern());
    }
    visitPathPatternList = (ctx: PathPatternListContext) => {
        const graphs: MatchPatternGraph[] = [];
        ctx.pathPattern().map(pattern => {

            this.visit(pattern);
            if (!this.nodeBuilder) throw new Error("No pattern specified");
            const graph = this.nodeBuilder.build();
            graphs.push(graph);
        })
        return graphs.reduce((previousValue, currentValue) =>
                previousValue.unionWithAlias(currentValue),
            new MatchPatternGraph());
    }

    visitNodePattern = (ctx: NodePatternContext) => {
        if (!this.edgeBuilder) {
            this.nodeBuilder = new MatchPatternNodeBuilder();
        } else {
            this.nodeBuilder = this.edgeBuilder.createNode();
        }
        new NodePatternVisitor(this.nodeBuilder).visit(ctx);
        return null;
    }

    visitEdgePattern = (ctx: EdgePatternContext) => {
        if (!this.nodeBuilder) {
            this.edgeBuilder = new MatchPatternEdgeBuilder({});
        } else {
            this.edgeBuilder = this.nodeBuilder.createEdge();
        }
        new EdgePatternVisitor(this.edgeBuilder).visit(ctx);
        return null;
    }

}