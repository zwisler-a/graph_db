
export type PropertiesMap = Record<string, any>;
export abstract class Properties {

    private properties: PropertiesMap = {}

    public getProperty(key: string) {
        return this.properties[key];
    }

    public setProperty(key: string, value: any) {
        this.properties[key] = value
    }

    public setProperties(props: PropertiesMap) {
        this.properties = props;
    }

    public getKeys(): string[] {
        return Object.keys(this.properties);
    }
}