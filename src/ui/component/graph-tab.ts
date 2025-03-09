import {Component} from "../core/component";
import {GraphView} from "./graph-view";
import {QueryResult} from "../../query/query-result";
import api from "../core/api";


@Component('graph-tab')
class GraphTab extends HTMLElement {
    private graphView?: GraphView = undefined;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <gql-input></gql-input>
          <graph-render-properties></graph-render-properties>
          <graph-view> </graph-view>
        `;
        this.querySelector('graph-render-properties')?.addEventListener('graph-settings-changed', this.graphPropertiesHandler());
        this.querySelector('gql-input')?.addEventListener('query', this.graphQueryHandler());
        this.graphView = this.querySelector('graph-view')!;
    }

    private graphPropertiesHandler() {
        return (event: Event) => {
            const customEvent = event as CustomEvent<{ charge: number; linkDistance: number; centering: number }>;
            const {charge, linkDistance, centering} = customEvent.detail;
            if (!this.graphView) return;
            this.graphView.charge = charge;
            this.graphView.linkDistance = linkDistance;
            this.graphView.centerStrength = centering;
        };
    }

    private graphQueryHandler() {
        return async (event: Event) => {
            const customEvent = event as CustomEvent<{ query: string }>;
            const {query} = customEvent.detail;
            if (query && this.graphView) {
                const queryResults: QueryResult = await api.getGraph(query);
                console.log(this.graphView)
                this.graphView.drawGraph(queryResults.graph);
            }
        };
    }
}

export {GraphTab};