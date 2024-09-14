export class AliasStore<T> {

    private store: Record<string, T> = {};


    has(alias: string) {
        return !!this.store[alias];
    }

    add(alias:string, value:T) {
        this.store[alias] = value;
    }

    get(alias: string): T {
        return this.store[alias];
    }
}