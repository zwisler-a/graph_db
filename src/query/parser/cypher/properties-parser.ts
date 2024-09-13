import {ParseTreeNode, ParseTreeNodeType, PropertiesNode} from "../domain/parse-tree";
import {Tokens} from "../domain/token";

export function parseProperties(tokens: Tokens): ParseTreeNode {
    const propertiesNode: PropertiesNode = {type: ParseTreeNodeType.PROPERTIES, children: []};
    const properties = tokens.join('').replace(/[{}]/g, '').split(',').map(prop => prop.trim());

    properties.forEach(prop => {
        const [key, value] = prop.split(':').map(part => part.trim());
        propertiesNode.children?.push({
            type: ParseTreeNodeType.PROPERTY,
            value,
            key
        });
    });

    return propertiesNode;
}