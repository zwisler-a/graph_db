import {Component} from "../core/component";

@Component("tabs-view")
class TabsView extends HTMLElement {
    private tabCount = 0;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div id="tab-bar">
            <button id="new-tab">New Tab</button>
          </div>
          <div id="tab-content"></div>
        `;
        this.querySelector('#new-tab')!.addEventListener('click', () => this.addTab());
        this.addTab();
    }

    addTab() {
        const tabId = `tab-${++this.tabCount}`;

        this.querySelector('#tab-bar')!.insertAdjacentHTML('beforeend', `
          <div class="tab-button" data-tab-id="${tabId}">
            Tab ${this.tabCount} <span class="close-tab"> x</span>
          </div>
        `);

        this.querySelector('#tab-content')!.insertAdjacentHTML('beforeend', `
          <graph-tab id="${tabId}" tab-id="${tabId}" style="display: none;"></graph-tab>
        `);

        this.querySelector(`.tab-button[data-tab-id="${tabId}"] span`)!.addEventListener('click', e => {
            e.stopPropagation();
            this.removeTab(tabId);
        });

        this.querySelector(`.tab-button[data-tab-id="${tabId}"]`)!.addEventListener('click', () => this.showTab(tabId));

        this.showTab(tabId);
    }

    showTab(tabId: string) {
        this.querySelectorAll('graph-tab').forEach((panel: any) => panel.style.display = 'none');
        this.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        (this.querySelector(`#${tabId}`) as any).style.display = 'flex';
        this.querySelector(`.tab-button[data-tab-id="${tabId}"]`)!.classList.add('active');
    }

    removeTab(tabId: string) {
        this.querySelector(`.tab-button[data-tab-id="${tabId}"]`)?.remove();
        this.querySelector(`#${tabId}`)?.remove();
        this.showTab((this.querySelector('.tab-button') as any)?.dataset.tabId || '');
    }
}

export {TabsView};
