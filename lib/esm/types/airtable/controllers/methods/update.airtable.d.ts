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
export declare function update(arg: Arguments): (void | any);
export {};
//# sourceMappingURL=update.airtable.d.ts.map