import {app, BrowserWindow, ipcMain} from 'electron';
import {GraphQLParser} from "../parser/antlr-parser/antlr-gql-parser";
import {InMemoryGraphStore} from "../store/in-memory-graph-store";
import {QueryService} from "../query/query-service";
import {logger} from "../util/logger";
import {QueryResult} from "../query/query-result";
import {Graph} from "../graph/graph";

async function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    await win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});


const parser = new GraphQLParser();

const graph = new Graph();

const graphStore = InMemoryGraphStore.from(graph);
const queryService = QueryService.from(graphStore)

ipcMain.handle('get-graph-data', (event, args: string): QueryResult => {
    logger.info('Getting graph data for: ' + args);
    if (args.toLowerCase() == 'all') return new QueryResult([graph])
    const results = queryService.query(parser.parse(args));
    logger.info(`Returning ${results.toString()}`);
    return results;
});