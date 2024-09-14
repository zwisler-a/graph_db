import {ParseTreeNode} from "../../../parser/domain/parse-tree";

export function findFirstInChildren<T extends ParseTreeNode>(
    typeGuard: (node: ParseTreeNode) => node is T,
    parent: { children?: ParseTreeNode[] }
): T | undefined {
    return parent.children?.find(typeGuard);
}