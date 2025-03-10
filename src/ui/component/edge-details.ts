import {Component} from "../core/component";
import {Edge} from "../../graph/edge";

@Component('edge-details')
class EdgeDetails extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ``;
    }

    public show(edge: Edge): void {
        this.innerHTML = `<h5>Edge</h5></h5><pre>${JSON.stringify(edge, null, 2)}</pre>`;
    }
}

export {EdgeDetails};
