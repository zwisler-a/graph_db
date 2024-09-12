import {Graph} from "../graph/graph";

export class GraphStore {

    private constructor(
        public graph: Graph
    ) {
    }

    public static from(graph: Graph) {
        return new GraphStore(graph);
    }

}