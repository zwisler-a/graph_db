import {Node} from "./node";
import {Edge} from "./edge";

export class Graph<N extends Node = Node, E extends Edge = Edge> {
    public nodes: N[];
    public edges: E[];

    constructor(
        nodes?: N[],
        edges?: E[]
    ) {
        this.edges = edges ?? [];
        this.nodes = nodes ?? [];
    }


    public getEdgesStartingAtNode(node: N) {
        return this.edges.filter(edge => edge.from.id === node.id);
    }

    public getEdgesEndingAtNode(node: N) {
        return this.edges.filter(edge => edge.to.id === node.id);
    }

    public union(other: Graph<N, E>): Graph<N, E> {
        const nodeMap = new Map<string, N>(
            this.nodes.map(node => [node.id, node])
        );

        for (const node of other.nodes) {
            if (!nodeMap.has(node.id)) {
                nodeMap.set(node.id, node);
            }
        }

        const nodes = Array.from(nodeMap.values());
        const edges = this.edges.concat(other.edges);
        for (const edge of edges) {
            const fromNode = nodeMap.get(edge.from.id);
            const toNode = nodeMap.get(edge.to.id);
            if(!fromNode || !toNode) throw new Error('Could not find node');
            edge.to = toNode;
            edge.from = fromNode;
        }

        return new Graph<N, E>(nodes, edges);
    }


    toString() {
        return `${this.nodes.length} nodes ${this.edges.length} edges`;
    }
}