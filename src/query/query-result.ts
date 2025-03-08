import {Graph} from "../graph/graph";

export class QueryResult {
    public readonly graph: Graph;

    constructor(
        public rawRows: Graph[],
        public readonly error?: Error
    ) {
        this.graph = rawRows.reduce((previousValue, currentValue) => {
            return previousValue.union(currentValue);
        }, new Graph());

    }

    toString() {
        return this.rawRows.map(row => row.toString()).join('\n');
    }
}