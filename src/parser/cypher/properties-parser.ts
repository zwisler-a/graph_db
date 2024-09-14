import {ParseTreeNodeType} from "../domain/parse-tree";
import {Tokens} from "../domain/token";
import {PropertiesNode} from "../domain/property/properties-node";

export function parseProperties(tokens: Tokens): PropertiesNode {
    const propertiesNode: PropertiesNode = {type: ParseTreeNodeType.PROPERTIES, children: []};
    const properties = tokens.tokens.join('').replace(/[{}]/g, '').split(',').map(prop => prop.trim());

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