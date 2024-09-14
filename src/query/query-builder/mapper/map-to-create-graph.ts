import {ParseTree} from "../../../parser/domain/parse-tree";
import {isCreateClauseNode} from "../../../parser/domain/clauses/create-clause-node";
import {Node} from "../../../graph/node";
import {EdgePatternNode, isEdgePatternNode} from "../../../parser/domain/pattern/edge-pattern-node";
import {CreateNode} from "../../create-graph/create-node";
import {CreateEdge} from "../../create-graph/create-edge";
import {isNodePatternNode, NodePatternNode} from "../../../parser/domain/pattern/node-pattern-node";
import {findFirstInChildren} from "../util/find-first-in-children";
import {CreateGraph} from "../../create-graph/create-graph";
import {isLabelExpression} from "../../../parser/domain/label/label-expression-node";
import {isAliasNode} from "../../../parser/domain/variable/alias-node";
import {isPropertiesNode} from "../../../parser/domain/property/properties-node";
import {convertPropertyNodeToRecord} from "./map-to-property-record";

export function createCreatePattern(parseTree: ParseTree) {
    const createClause = findFirstInChildren(isCreateClauseNode, parseTree);
    let previousNode: Node | null = null;
    let currentEdge: EdgePatternNode | null = null;
    const nodes: CreateNode[] = [];
    const edges: CreateEdge[] = [];
    createClause?.children?.forEach(child => {
        if (isNodePatternNode(child)) {
            const n = mapParserNodeToCreateNode(child);
            nodes.push(n);
            if (currentEdge && previousNode) {
                edges.push(mapParserEdgeToCreateEdge(currentEdge, previousNode, n));
                currentEdge = null;
            }
            previousNode = n;
        }
        if (isEdgePatternNode(child)) {
            currentEdge = child;
        }
    })

    return new CreateGraph(nodes, edges);
}

function mapParserNodeToCreateNode(node: NodePatternNode): CreateNode {
    const n = new CreateNode();

    const label = findFirstInChildren(isLabelExpression, node);
    if (label) {
        n.label = [label.label];
    }

    const alias = findFirstInChildren(isAliasNode, node);
    if (alias) {
        n.alias = alias.name;
    }

    const propertyNode = findFirstInChildren(isPropertiesNode, node);
    if (propertyNode) {
        const props = convertPropertyNodeToRecord(propertyNode);
        n.setProperties(props);
    }
    return n;
}

function mapParserEdgeToCreateEdge(edge: EdgePatternNode, from: Node, to: Node): CreateEdge {
    const e = new CreateEdge(from, to);

    const label = findFirstInChildren(isLabelExpression, edge);
    if (label) {
        e.label = [label.label];
    }

    const propertyNode = findFirstInChildren(isPropertiesNode, edge);
    if (propertyNode) {
        if (!isPropertiesNode(propertyNode)) throw new Error();
        const props = convertPropertyNodeToRecord(propertyNode);
        e.setProperties(props);
    }

    return e;
}