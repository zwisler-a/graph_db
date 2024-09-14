import {ParseTree} from "../../parser/domain/parse-tree";
import {GraphQuery} from "../query";
import {createCreatePattern} from "./mapper/map-to-create-graph";
import {createMatchPattern} from "./mapper/map-to-match-graph";

export class GraphQueryBuilder {


    build(parseTree: ParseTree): GraphQuery {
        return new GraphQuery(
            createMatchPattern(parseTree),
            createCreatePattern(parseTree)
        );
    }


}