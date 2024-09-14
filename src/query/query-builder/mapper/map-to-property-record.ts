import {PropertiesNode} from "../../../parser/domain/property/properties-node";

export function convertPropertyNodeToRecord(node: PropertiesNode) {
    const res: Record<string, any> = {}
    node.children?.forEach(prop => {
        res[prop.key] = prop.value
    });
    return res;
}