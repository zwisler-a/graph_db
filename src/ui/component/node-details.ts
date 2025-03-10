import {Component} from "../core/component";
import {Node} from "../../graph/node";

@Component('node-details')
class NodeDetails extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ``;
    }

    public show(node: Node) {
        this.innerHTML = `<h5>Node</h5></h5><pre>${JSON.stringify(node, null, 2)}</pre>`;
    }
}

export {NodeDetails};
