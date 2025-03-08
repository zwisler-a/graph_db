import {Component} from "../core/component";

@Component('graph-render-properties')
class GraphTab extends HTMLElement {
    private _chargeSlider?: HTMLInputElement = undefined;
    private _linkSlider?: HTMLInputElement = undefined;
    private _centerSlider?: HTMLInputElement = undefined;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `      
      <div class="sliders">
        <label>Charge: <input type="range" class="charge-slider" min="-500" max="500" value="-100"></label>
        <label>Link Distance: <input type="range" class="link-slider" min="10" max="600" value="200"></label>
        <label>Centering: <input type="range" class="center-slider" min="0" max="1" step="0.01" value="0.5"></label>
      </div>
    `;
        this._chargeSlider = this.querySelector(".charge-slider")!;
        this._linkSlider = this.querySelector(".link-slider")!;
        this._centerSlider = this.querySelector(".center-slider")!;
        this.setupEventListeners();
        this.emitState();
    }

    setupEventListeners() {
        this.querySelectorAll("input[type=range]").forEach(input => {
            input.addEventListener("input", () => {
                this.emitState();
            });
        });
    }

    private emitState() {
        this.dispatchEvent(new CustomEvent("graph-settings-changed", {
            detail: {
                charge: +(this._chargeSlider?.value ?? ''),
                linkDistance: +(this._linkSlider?.value ?? ''),
                centering: +(this._centerSlider?.value ?? '')
            },
            bubbles: true,
            composed: true
        }));
    }
}

export {GraphTab};
