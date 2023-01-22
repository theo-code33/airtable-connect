interface Datas {
    fields: {
        [key: string]: any;
    };
}
interface Arguments {
    base: any;
    datas: Array<Datas>;
    table: string;
    action: Function;
}
export declare function create(arg: Arguments): (void | any);
export {};
//# sourceMappingURL=create.airtable.d.ts.map