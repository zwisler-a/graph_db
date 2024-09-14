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

}