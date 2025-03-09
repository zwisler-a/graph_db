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
        const edges = new Set(this.edges.concat(other.edges));
        for (const edge of edges) {
            const fromNode = nodeMap.get(edge.from.id);
            const toNode = nodeMap.get(edge.to.id);
            if (!fromNode || !toNode) throw new Error('Could not find node');
            edge.to = toNode;
            edge.from = fromNode;
        }

        return new Graph<N, E>(nodes, [...edges]);
    }

    private dfs(node: Node, visited: Set<Node>, component: Node[]): void {
        visited.add(node);
        component.push(node);

        for (const edge of this.edges) {
            if (edge.from === node && !visited.has(edge.to)) {
                this.dfs(edge.to, visited, component);
            }
            if (edge.to === node && !visited.has(edge.from)) {
                this.dfs(edge.from, visited, component);
            }
        }
    }

    getComponents(): N[][] {
        const visited = new Set<N>();
        const components: N[][] = [];

        for (const node of this.nodes) {
            if (!visited.has(node)) {
                const component: N[] = [];
                this.dfs(node, visited, component);
                components.push(component);
            }
        }
        return components;
    }


    toString() {
        return `${this.nodes.length} nodes ${this.edges.length} edges`;
    }

    removeNode(node: Node, detach: boolean) {
        const newEdges = this.edges.filter(edge => edge.to.id !== node.id && edge.from.id !== node.id);
        if (!detach && newEdges.length != this.edges.length) {
            throw new Error(`Node is still contained in an edge.`);
        }

        this.nodes = this.nodes.filter(n => node.id !== n.id);
        this.edges = newEdges;
    }

    removeEdge(edge: Edge) {
        this.edges = this.edges.filter(edge => edge.id !== edge.id);
    }
}