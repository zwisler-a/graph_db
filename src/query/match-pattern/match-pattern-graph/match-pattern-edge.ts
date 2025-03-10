import {Edge} from "../../../graph/edge";
import {MatchPatternNode} from "./match-pattern-node";
import {PropertiesMap} from "../../../graph/properties";

export class MatchPatternEdge extends Edge<MatchPatternNode> {

    alias?: string;
    ignoreDirection: boolean = false;

    constructor(
        from: MatchPatternNode,
        to: MatchPatternNode,
        props?: PropertiesMap,
        label?: string,
        alias?: string
    ) {
        super(from, to, props, label);
        this.alias = alias;
    }

    matches(other: Edge): boolean {
        if (this.label && (other.label != this.label)) return false;
        for (const key of this.getKeys()) {
            if (other.getProperty(key) !== this.getProperty(key)) return false;
        }
        const fromToEquals = this.to.matches(other.to) && this.from.matches(other.from);
        const toFormEquals = this.to.matches(other.from) && this.from.matches(other.to);
        return this.ignoreDirection ? (fromToEquals || toFormEquals) : fromToEquals;
    }
}