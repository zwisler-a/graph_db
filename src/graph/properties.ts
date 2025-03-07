export type PropertiesMap = Record<string, any>;

export abstract class Properties {

    private properties: PropertiesMap = {}

    public getProperty(key: string) {
        return this.properties[key];
    }

    public setProperty(key: string, value: any) {
        this.properties[key] = value
    }

    public setProperties(props?: PropertiesMap) {
        if (!props) return;
        this.properties = props;
    }

    public getKeys(): string[] {
        if (!this.properties) return [];
        return Object.keys(this.properties);
    }

    public getProperties(): PropertiesMap {
        if (!this.properties) return [];
        return {...this.properties};
    }
}