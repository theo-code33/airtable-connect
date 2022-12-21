import { AirtableConfig } from "../config/config.airtable.js";
import { create } from "./methods/create.airtable.js";
import { deleteData } from "./methods/delete.airtable.js";
import { read } from "./methods/read.airtable.js";
import { update } from "./methods/update.airtable.js";

interface Datas {
    fields: {
        [key: string]: any
    }
}

const AirtableConfigInstance : any = new AirtableConfig()

export class AirtableData{
    base : any;
    table : string;
    view : string;

    constructor(table : string, view : string | undefined) {
        this.base = AirtableConfigInstance.getBase();
        this.table = table
        this.view = view || 'Grid view'
    }
    async read(action : any){
        return await read(this.base, this.table, this.view, action)
    }
    async create(datas : Array<Datas>, action : any){
        return await create(this.base, datas, this.table, action)
    }
    async update(datas : Array<Datas>, action : any){
        return await update(this.base ,datas, this.table, action)
    }
    async delete(id : string, action : any){
        return await deleteData(this.base, id, this.table, action)
    }
}