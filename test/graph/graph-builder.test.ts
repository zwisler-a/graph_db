import {describe, test} from '@jest/globals';
import {GraphBuilder} from "../../src/graph/graph-builder";

describe('Graph builder', () => {
    test('create network', () => {

        const graph = GraphBuilder.startNode()
            .createEdge().createNode().close()
            .createEdge().createNode().close()
            .createEdge().createNode().close()
            .build()


        console.log(graph)

    });

});