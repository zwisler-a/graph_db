import {Component} from "../core/component";
import {GraphView} from "./graph-view";
import {QueryResult} from "../../query/query-result";
import api from "../core/api";
import {RenderProperties} from "./graph-render-properties";
import {NodeDetails} from "./node-details";
import {EdgeDetails} from "./edge-details";
import {Edge} from "../../graph/edge";
import {Node} from "../../graph/node";


@Component('graph-tab')
class GraphTab extends HTMLElement {
    private graphView?: GraphView = undefined;
    private errorDisplay?: Element | null;
    private nodeDetails?: NodeDetails | null;
    private edgeDetails?: EdgeDetails | null;
    private detailsView?: HTMLElement | null;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <gql-input></gql-input>
          <div class="error" js-error-display></div>
          <graph-render-properties></graph-render-properties>
          <div class="graph-tab-content">
            <div style="display: none" class="details-view">
                <node-details></node-details>
                <edge-details></edge-details>    
            </div>
            <graph-view> </graph-view>
          </div>
        `;
        this.querySelector('graph-render-properties')?.addEventListener('graph-settings-changed', this.graphPropertiesHandler());
        this.querySelector('gql-input')?.addEventListener('query', this.graphQueryHandler());
        this.errorDisplay = this.querySelector('[js-error-display]');
        this.detailsView = this.querySelector('.details-view');
        this.nodeDetails = this.querySelector('node-details');
        this.edgeDetails = this.querySelector('edge-details');
        this.graphView = this.querySelector('graph-view')!;
        if (this.graphView) {
            this.graphView.addEventListener('nodeClick', this.showNodeHandler())
            this.graphView.addEventListener('edgeClick', this.showEdgeHandler())
        }
    }

    private graphPropertiesHandler() {
        return (event: Event) => {
            const customEvent = event as CustomEvent<RenderProperties>;
            if (!this.graphView) return;
            this.graphView.updateRenderProperties(customEvent.detail)
        };
    }

    private showNodeHandler() {
        return (event: Event) => {
            if(this.detailsView) this.detailsView.style.display = "flex"
            this.nodeDetails?.show((event as CustomEvent<Node>).detail)
        };
    }

    private showEdgeHandler() {
        return (event: Event) => {
            if(this.detailsView) this.detailsView.style.display = "flex"
            this.edgeDetails?.show((event as CustomEvent<Edge>).detail)
        };
    }

    private graphQueryHandler() {
        return async (event: Event) => {
            const customEvent = event as CustomEvent<{ query: string }>;
            const {query} = customEvent.detail;
            if (query && this.graphView) {
                this.hideError();
                const queryResults: QueryResult = await api.getGraph(query);
                if (!queryResults.error) {
                    await this.graphView.drawGraph(queryResults.graph);
                } else {
                    this.displayError(queryResults.error);
                }
            }
        };
    }

    private displayError(error: Error) {
        if (this.errorDisplay) {
            this.errorDisplay.innerHTML = error.message;
        }
    }

    private hideError() {
        if (this.errorDisplay) {
            this.errorDisplay.innerHTML = '';
        }
    }
}

export {GraphTab};