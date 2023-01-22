interface Datas {
    fields: {
        [key: string]: any;
    };
}
interface ArgumentsCreateUpdate {
    datas: Array<Datas>;
    action: Function;
}
export declare class AirtableData {
    base: any;
    table: string;
    view: string;
    constructor(table: string, view: string | undefined);
    read(action: Function): Promise<unknown>;
    create(arg: ArgumentsCreateUpdate): Promise<any>;
    update(arg: ArgumentsCreateUpdate): Promise<any>;
    delete(id: string, action: Function): Promise<any>;
}
export {};
//# sourceMappingURL=controllers.airtable.d.ts.map