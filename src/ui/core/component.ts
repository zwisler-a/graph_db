export function Component(tagName: string) {
    return function <T extends CustomElementConstructor>(constructor: T) {
        customElements.define(tagName, constructor);
    };
}
