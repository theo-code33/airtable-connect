import { AirtableConfig } from "../config/config.airtable.js";
import { create } from "./methods/create.airtable.js";
import { deleteData } from "./methods/delete.airtable.js";
import { read } from "./methods/read.airtable.js";
import { update } from "./methods/update.airtable.js";
export class AirtableData {
    base;
    table;
    view;
    constructor(table, view) {
        this.base = AirtableConfig.getBase();
        this.table = table;
        this.view = view || 'Grid view';
    }
    async read(action) {
        return await read({ base: this.base, table: this.table, view: this.view, action: action });
    }
    async create(arg) {
        return await create({ base: this.base, datas: arg.datas, table: this.table, action: arg.action });
    }
    async update(arg) {
        return await update({ base: this.base, datas: arg.datas, table: this.table, action: arg.action });
    }
    async delete(id, action) {
        return await deleteData({ base: this.base, id: id, table: this.table, action: action });
    }
}