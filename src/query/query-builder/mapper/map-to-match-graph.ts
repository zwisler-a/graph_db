import {ParseTree} from "../../../parser/domain/parse-tree";
import {isMatchClauseNode} from "../../../parser/domain/clauses/match-clause-node";
import {PatternMatchingNode} from "../../pattern-matching/pattern-matching-graph/pattern-matching-node";
import {EdgePatternNode, isEdgePatternNode} from "../../../parser/domain/pattern/edge-pattern-node";
import {PatternMatchingEdge} from "../../pattern-matching/pattern-matching-graph/pattern-matching-edge";
import {isNodePatternNode, NodePatternNode} from "../../../parser/domain/pattern/node-pattern-node";
import {findFirstInChildren} from "../util/find-first-in-children";
import {isAliasNode} from "../../../parser/domain/variable/alias-node";
import {isPropertiesNode} from "../../../parser/domain/property/properties-node";
import {convertPropertyNodeToRecord} from "./map-to-property-record";
import {PatternMatchingGraph} from "../../pattern-matching/pattern-matching-graph/pattern-matching-graph";

export function createMatchPattern(parseTree: ParseTree) {
    const matchClause = findFirstInChildren(isMatchClauseNode, parseTree);
    let previousNode: PatternMatchingNode | null = null;
    let currentEdge: EdgePatternNode | null = null;
    const nodes: PatternMatchingNode[] = [];
    const edges: PatternMatchingEdge[] = [];
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

    return new PatternMatchingGraph(nodes, edges);
}

function mapParserNodeToQueryNode(node: NodePatternNode): PatternMatchingNode {
    const n = new PatternMatchingNode();

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

function mapParserEdgeToQueryEdge(edge: EdgePatternNode, from: PatternMatchingNode, to: PatternMatchingNode): PatternMatchingEdge {
    const e = new PatternMatchingEdge(from, to);

    const propertyNode = findFirstInChildren(isPropertiesNode, edge);
    if (propertyNode) {
        if (!isPropertiesNode(propertyNode)) throw new Error();
        const props = convertPropertyNodeToRecord(propertyNode);
        e.setProperties(props);
    }

    return e;
}