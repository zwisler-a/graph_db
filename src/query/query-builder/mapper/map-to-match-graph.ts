import {ParseTree} from "../../../parser/domain/parse-tree";
import {isMatchClauseNode} from "../../../parser/domain/clauses/match-clause-node";
import {MatchPatternNode} from "../../match-pattern/match-pattern-graph/match-pattern-node";
import {EdgePatternNode, isEdgePatternNode} from "../../../parser/domain/pattern/edge-pattern-node";
import {MatchPatternEdge} from "../../match-pattern/match-pattern-graph/match-pattern-edge";
import {isNodePatternNode, NodePatternNode} from "../../../parser/domain/pattern/node-pattern-node";
import {findFirstInChildren} from "../util/find-first-in-children";
import {isAliasNode} from "../../../parser/domain/variable/alias-node";
import {isPropertiesNode} from "../../../parser/domain/property/properties-node";
import {convertPropertyNodeToRecord} from "./map-to-property-record";
import {MatchPatternGraph} from "../../match-pattern/match-pattern-graph/match-pattern-graph";

export function createMatchPattern(parseTree: ParseTree) {
    const matchClause = findFirstInChildren(isMatchClauseNode, parseTree);
    let previousNode: MatchPatternNode | null = null;
    let currentEdge: EdgePatternNode | null = null;
    const nodes: MatchPatternNode[] = [];
    const edges: MatchPatternEdge[] = [];
    matchClause?.children?.forEach(child => {
        if (isNodePatternNode(child)) {
            const n = mapParserNodeToQueryNode(child);
            nodes.push(n);
            if (currentEdge && previousNode) {
                edges.push(mapParserEdgeToQueryEdge(currentEdge, previousNode, n));
            }
            previousNode = n;
        }
        if (isEdgePatternNode(child)) {
            currentEdge = child;
        }
    })

    return new MatchPatternGraph(nodes, edges);
}

function mapParserNodeToQueryNode(node: NodePatternNode): MatchPatternNode {
    const n = new MatchPatternNode();

    const variableDefinition = findFirstInChildren(isAliasNode, node);
    if (variableDefinition && isAliasNode(variableDefinition)) {
        n.alias = variableDefinition.name
    }

    const propertyNode = findFirstInChildren(isPropertiesNode, node);
    if (propertyNode) {
        if (!isPropertiesNode(propertyNode)) throw new Error();
        const props = convertPropertyNodeToRecord(propertyNode);
        n.setProperties(props);
    }
    return n;
}

function mapParserEdgeToQueryEdge(edge: EdgePatternNode, from: MatchPatternNode, to: MatchPatternNode): MatchPatternEdge {
    const e = new MatchPatternEdge(from, to);

    const propertyNode = findFirstInChildren(isPropertiesNode, edge);
    if (propertyNode) {
        if (!isPropertiesNode(propertyNode)) throw new Error();
        const props = convertPropertyNodeToRecord(propertyNode);
        e.setProperties(props);
    }

    return e;
}