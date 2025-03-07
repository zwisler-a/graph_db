class GqlInput extends HTMLElement {
    constructor() {
        super();
        this.value = 'ALL';
    }

    connectedCallback() {
        this.render();
        this.textarea.addEventListener('input', () => {
            this.value = this.textarea.value;
        });
    }

    render() {
        this.innerHTML = `
      <div class="editor-container">
        <textarea class="prism-live language-cypher"></textarea>
      </div>
    `;
        this.textarea = this.querySelector('textarea');
        this.textarea.value = this.value;
    }

    get query() {
        return this.value;
    }

    set query(val) {
        this.value = val;
        this.textarea.value = val;
    }
}

customElements.define('gql-input', GqlInput);