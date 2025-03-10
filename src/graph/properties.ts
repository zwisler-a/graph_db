export type PropertiesMap = Record<string, any>;

export abstract class Properties {

    private properties: PropertiesMap = {}

    public getProperty(key: string) {
        if (key.includes('.')) {
            const keys = key.split('.');
            let currentValue = this.properties;
            for (const currentKey of keys) {
                if (currentValue[currentKey] == undefined) throw new Error(`Property "${key}" not found`);
                currentValue = currentValue[currentKey];
            }
        }
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