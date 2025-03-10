import {Component} from "../core/component";

export interface RenderProperties {
    charge: number;
    linkDistance: number;
    showProps: boolean
}

@Component('graph-render-properties')
class GraphTab extends HTMLElement {
    private _chargeSlider?: HTMLInputElement = undefined;
    private _linkSlider?: HTMLInputElement = undefined;
    private _centerSlider?: HTMLInputElement = undefined;
    private _showPropsCheckbox?: HTMLInputElement = undefined;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `      
      <div class="sliders">
        <label>Charge: <input type="number" class="charge-slider" value="-1000"></label>
        <label>Link Distance: <input type="number" class="link-slider" value="200"></label>
        <label>Show Properties: <input class="show-props" type="checkbox"></label>
      </div>
    `;
        this._chargeSlider = this.querySelector(".charge-slider")!;
        this._linkSlider = this.querySelector(".link-slider")!;
        this._showPropsCheckbox = this.querySelector(".show-props")!;
        this.setupEventListeners();
        this.emitState();
    }

    setupEventListeners() {
        this.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => {
                this.emitState();
            });
        });
    }

    private emitState() {
        this.dispatchEvent(new CustomEvent<RenderProperties>("graph-settings-changed", {
            detail: {
                charge: +(this._chargeSlider?.value ?? ''),
                linkDistance: +(this._linkSlider?.value ?? ''),
                showProps: this._showPropsCheckbox?.checked ?? false
            },
            bubbles: true,
            composed: true
        }));
    }
}

export {GraphTab};
