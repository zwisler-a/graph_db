import {Component} from "../core/component";

@Component('gql-input')
class GraphTab extends HTMLElement {
    private _input?: HTMLTextAreaElement = undefined;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <textarea class="query-input"></textarea>
            <button>Go</button>
        `;
        this._input = this.querySelector("textarea")!;
        this._input.addEventListener('keypress', ev => {
            if (ev.key === 'Enter' && !ev.shiftKey) {
                ev.stopPropagation();
                ev.preventDefault();
                this.emitQuery();
            }
        });
        this.querySelector("button")!.addEventListener('click', this.queryButtonClickHandler());
    }

    private queryButtonClickHandler() {
        return (ev: Event) => {
            this.emitQuery();
        };
    }

    private emitQuery() {
        this.dispatchEvent(new CustomEvent("query", {
            detail: {
                query: this._input?.value,
            },
            bubbles: true,
            composed: true
        }));
    }
}

export {GraphTab};
