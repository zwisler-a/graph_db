import {Node} from "./node";
import {Edge} from "./edge";

export class Graph {
    constructor(
        public nodes: Node[],
        public edges: Edge[]
    ) {
        this.nodes.forEach(n => n.setGraph(this))
    }

    public getEdgesStartingAtNode(node: Node) {
        return this.edges.filter(edge => edge.from.id === node.id);
    }

    public getEdgesEndingAtNode(node: Node) {
        return this.edges.filter(edge => edge.to.id === node.id);
    }

}