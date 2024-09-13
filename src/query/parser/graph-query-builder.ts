import {
    EdgeNode,
    isEdgeNode,
    isNodeNode,
    isPropertiesNode,
    isVariableDefinitionNode,
    NodeNode,
    ParseTree,
    ParseTreeNode,
    ParseTreeNodeType,
    PropertiesNode
} from "./domain/parse-tree";
import {GraphQuery} from "../query";
import {QueryNode} from "../query-node";
import {QueryEdge} from "../query-edge";
import {MatchPatternGraph} from "../match-pattern-graph";
import {Node} from "../../graph/node";
import {Edge} from "../../graph/edge";

export class GraphQueryBuilder {


    findFirstInChildren(type: ParseTreeNodeType, parent: { children?: ParseTreeNode[] }): ParseTreeNode | undefined {
        return parent.children?.find(c => c.type === type);
    }


    build(parseTree: ParseTree): GraphQuery {
        const {nodes: matchPatternNodes, edges: matchPatternEdges} = this.createMatchPattern(parseTree)
        const {nodes: createNodes, edges: createEdges} = this.createCreatePattern(parseTree);
        return new GraphQuery(new MatchPatternGraph(matchPatternNodes, matchPatternEdges));
    }


    private createMatchPattern(parseTree: ParseTree) {
        const matchClause = this.findFirstInChildren(ParseTreeNodeType.MATCH, parseTree);
        let previousNode: QueryNode | null = null;
        let currentEdge: EdgeNode | null = null;
        const nodes: QueryNode[] = [];
        const edges: QueryEdge[] = [];
        matchClause?.children?.forEach(child => {
            if (isNodeNode(child)) {
                const n = this.mapParserNodeToQueryNode(child);
                nodes.push(n);
                if (currentEdge && previousNode) {
                    edges.push(this.mapParserEdgeToQueryEdge(currentEdge, previousNode, n));
                }
                previousNode = n;
            }
            if (isEdgeNode(child)) {
                currentEdge = child;
            }
        })

        return {nodes, edges}
    }

    private createCreatePattern(parseTree: ParseTree) {
        const createClause = this.findFirstInChildren(ParseTreeNodeType.CREATE, parseTree);
        let previousNode: Node | null = null;
        let currentEdge: EdgeNode | null = null;
        const nodes: Node[] = [];
        const edges: Edge[] = [];
        createClause?.children?.forEach(child => {
            if (isNodeNode(child)) {
                const n = this.mapParserNodeToNode(child);
                nodes.push(n);
                if (currentEdge && previousNode) {
                    edges.push(this.mapParserEdgeToEdge(currentEdge, previousNode, n));
                }
                previousNode = n;
            }
            if (isEdgeNode(child)) {
                currentEdge = child;
            }
        })

        return {nodes, edges}
    }

    private mapParserNodeToQueryNode(node: NodeNode): QueryNode {
        const n = new QueryNode([], []);

        const variableDefinition = this.findFirstInChildren(ParseTreeNodeType.VARIABLE_DEFINITION, node);
        if (variableDefinition && isVariableDefinitionNode(variableDefinition)) {
            n.variableName = variableDefinition.name
        }

        const propertyNode = this.findFirstInChildren(ParseTreeNodeType.PROPERTIES, node);
        if (propertyNode) {
            if (!isPropertiesNode(propertyNode)) throw new Error();
            const props = this.convertPropertyNodeToRecord(propertyNode);
            n.setProperties(props);
        }
        return n;
    }

    private mapParserNodeToNode(node: NodeNode): Node {
        const n = new Node();
        const propertyNode = this.findFirstInChildren(ParseTreeNodeType.PROPERTIES, node);
        if (propertyNode) {
            if (!isPropertiesNode(propertyNode)) throw new Error();
            const props = this.convertPropertyNodeToRecord(propertyNode);
            n.setProperties(props);
        }
        return n;
    }

    private mapParserEdgeToQueryEdge(edge: EdgeNode, from: QueryNode, to: QueryNode): QueryEdge {
        const e = new QueryEdge(from, to);

        const propertyNode = this.findFirstInChildren(ParseTreeNodeType.PROPERTIES, edge);
        if (propertyNode) {
            if (!isPropertiesNode(propertyNode)) throw new Error();
            const props = this.convertPropertyNodeToRecord(propertyNode);
            e.setProperties(props);
        }

        return e;
    }

    private mapParserEdgeToEdge(edge: EdgeNode, from: Node, to: Node): Edge {
        const e = new Edge(from, to);

        const propertyNode = this.findFirstInChildren(ParseTreeNodeType.PROPERTIES, edge);
        if (propertyNode) {
            if (!isPropertiesNode(propertyNode)) throw new Error();
            const props = this.convertPropertyNodeToRecord(propertyNode);
            e.setProperties(props);
        }

        return e;
    }


    convertPropertyNodeToRecord(node: PropertiesNode) {
        const res: Record<string, any> = {}
        node.children?.forEach(prop => {
            res[prop.key] = prop.value
        });
        return res;
    }

}