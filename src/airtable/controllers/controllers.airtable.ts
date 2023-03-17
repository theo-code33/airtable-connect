import { AirtableConfig } from "../config/config.airtable.js";
import { create } from "./methods/create.airtable.js";
import { deleteData } from "./methods/delete.airtable.js";
import { read } from "./methods/read.airtable.js";
import { update } from "./methods/update.airtable.js";

* @name AirtableData
    fields: {
* This class is used to Create, Read, Update and Delete datas in Airtable Table
* @param table string
* @param view string
* @example
* const tableInstance = new AirtableData('TABLE_NAME', 'VIEW_NAME if you want to use another view than Grid view')
*/
export class AirtableData{
    base : any;
    table : string;
    view : string;

    constructor(table : string, view : string | undefined) {
        this.base = AirtableConfig.getBase();
        this.table = table
        this.view = view || 'Grid view'
    }
    async read(arg: ArgumentsRead) : Promise<unknown> {
        return await read({base: this.base, table: this.table, view: this.view, action: arg.action, completedOnly: arg.completedOnly})
    }
    async create(arg : ArgumentsCreateUpdate){
        return await create({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }
    async update(arg : ArgumentsCreateUpdate){
        return await update({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }
    async delete(arg: ArgumentsDelete){
        return await deleteData({base: this.base, id: arg.id, table: this.table, action: arg.action})
    }
}