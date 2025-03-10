import {QueryResult} from "../../query/query-result";
import {GraphQLParser} from "../../parser/gql-parser";
import {InMemoryGraphStore} from "../../store/in-memory-graph-store";
import {Graph} from "../../graph/graph";
import {QueryService} from "../../query/query-service";
import {logger} from "../../util/logger";
import {LocalStorageGraphStore} from "../../store/localstorage-graph-store";

declare global {
    const __ELECTRON__: boolean;
}

let api: { getGraph: (graph: string) => Promise<QueryResult> } = {} as any;
if (__ELECTRON__) {
    const {ipcRenderer} = require('electron');
    api.getGraph = async (query: string): Promise<QueryResult> => {
        return ipcRenderer.invoke('get-graph-data', query);
    }
} else {
    const parser = new GraphQLParser();
    const graphStore = new LocalStorageGraphStore(new Graph());
    const queryService = QueryService.from(graphStore)
    api.getGraph = async (query: string): Promise<QueryResult> => {
        logger.info('Getting graph data for: ' + query);
        if (query.toLowerCase() == 'all') return new QueryResult([graphStore.getGraph()])
        try {
            const results = queryService.query(parser.parse(query));
            logger.info(`Returning ${results.toString()}`);
            return results;
        } catch (error: any) {
            logger.error('Error getting graph data', error);
            return new QueryResult([], error);
        }
    }
}

export default api;