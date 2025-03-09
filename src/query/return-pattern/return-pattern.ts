export class ReturnItem {
    constructor(
        public variableName?: string,
        public propertyPath?: string[]
    ) {
    }
}

export class ReturnPattern {
    public returnAll = false;
    public returnItems: ReturnItem[] = [];
}