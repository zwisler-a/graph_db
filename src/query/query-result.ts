import {Graph} from "../graph/graph";

export class QueryResult {
    public readonly graph: Graph;

    constructor(
        public rawRows: Graph[],
        public readonly error?: Error
    ) {
        this.graph = new Graph().union(...this.rawRows);

    }

    toString() {
        return this.rawRows.map(row => row.toString()).join('\n');
    }
}