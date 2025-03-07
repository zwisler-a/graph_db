require('./graph-tab.js')

class GraphTabs extends HTMLElement {
    constructor() {
        super();
        this.tabCount = 0;
    }

    connectedCallback() {
        this.innerHTML = `
      <div id="tab-bar">
      </div>
        <button id="new-tab">New Tab</button>
      <div id="tab-content"></div>
      
    `;
        this.querySelector('#new-tab').addEventListener('click', () => this.addTab());
        this.addTab();
    }

    addTab() {
        this.tabCount++;
        const tabId = `tab-${this.tabCount}`;

        // Create tab button
        const tabButton = document.createElement('div');
        tabButton.className = 'tab-button';
        tabButton.textContent = `Tab ${this.tabCount}`;
        tabButton.dataset.tabId = tabId;
        tabButton.addEventListener('click', () => this.showTab(tabId));
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-tab';
        closeBtn.textContent = ' x';
        closeBtn.addEventListener('click', e => {
            e.stopPropagation();
            this.removeTab(tabId);
        });
        tabButton.appendChild(closeBtn);
        this.querySelector('#tab-bar').appendChild(tabButton);

        // Create tab panel
        const graphTab = document.createElement('graph-tab');
        graphTab.setAttribute('tab-id', tabId);
        graphTab.id = tabId;
        graphTab.style.display = 'none';
        this.querySelector('#tab-content').appendChild(graphTab);

        this.showTab(tabId);
    }

    showTab(tabId) {
        this.querySelectorAll('graph-tab').forEach(panel => panel.style.display = 'none');
        this.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        const activePanel = this.querySelector(`#${tabId}`);
        if (activePanel) activePanel.style.display = 'block';
        const activeButton = this.querySelector(`.tab-button[data-tab-id="${tabId}"]`);
        if (activeButton) activeButton.classList.add('active');
    }

    removeTab(tabId) {
        const btn = this.querySelector(`.tab-button[data-tab-id="${tabId}"]`);
        if (btn) btn.remove();
        const panel = this.querySelector(`#${tabId}`);
        if (panel) panel.remove();
        const firstTab = this.querySelector('.tab-button');
        if (firstTab) this.showTab(firstTab.dataset.tabId);
    }
}

customElements.define('graph-tabs', GraphTabs);