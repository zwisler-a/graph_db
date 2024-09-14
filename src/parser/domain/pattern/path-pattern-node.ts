import {ParseTreeNode, ParseTreeNodeType} from "../parse-tree";
import {NodePatternNode} from "./node-pattern-node";
import {EdgePatternNode} from "./edge-pattern-node";

export interface PathPatternNode extends ParseTreeNode {
    type: ParseTreeNodeType.PATH_PATTERN;
    children: (NodePatternNode | PathPatternNode | EdgePatternNode)[];
}