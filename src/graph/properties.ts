export abstract class Properties {

    private properties: Record<string, any> = {}

    public getProperty(key: string) {
        return this.properties[key];
    }

    public setProperty(key: string, value: any) {
        this.properties[key] = value
    }

    public getKeys(): string[] {
        return Object.keys(this.properties);
    }


    setProperties(props: Record<string, any>) {
        this.properties = props;
    }

}