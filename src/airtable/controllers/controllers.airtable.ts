import { AirtableConfig } from "../config/config.airtable.js";
import { create } from "./methods/create.airtable.js";
import { deleteData } from "./methods/delete.airtable.js";
import { read } from "./methods/read.airtable.js";
import { update } from "./methods/update.airtable.js";
/**
* @name AirtableData
* @description
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

    constructor(table : string, view?: string) {
        this.base = AirtableConfig.getBase();
        this.table = table
        this.view = view || 'Grid view'
    }

    /**
    * @name read
    * @description
    * This method is used to read datas in Airtable Table
    * @param arg ArgumentsClientRead
    * @example
    * tableInstance.read({
    *   action: (datas) => {
    *       console.log(datas)
    *   },
    *   completedOnly: true
    * })
    */
    async read(arg: ArgumentsClientRead) : Promise<unknown> {
        return await read({base: this.base, table: this.table, view: this.view, action: arg.action, completedOnly: arg.completedOnly})
    }

    /**
    * @name create
    * @description
    * This method is used to create datas in Airtable Table
    * @param arg ArgumentsClientCreateUpdate
    * @example
    * tableInstance.create({
    *   datas: [{
    *        fields: {
    *            'Name': 'John Doe',
    *            'Age': 25
    *       }
    *   }],
    *   action: (datas) => {
    *       console.log(datas)
    *   }
    * })
    */
    async create(arg : ArgumentsClientCreateUpdate){
        return await create({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }

    /**
    * @name update
    * @description
    * This method is used to create datas in Airtable Table
    * @param arg ArgumentsClientCreateUpdate
    * @example
    * tableInstance.update({
    *   datas: [{
    *       id: 'RECORD_ID',
    *       fields: {
    *           'Name': 'John Doe',
    *           'Age': 25
    *       }
    *   }],
    *   action: (datas) => {
    *       console.log(datas)
    *   }
    * })
    */
    async update(arg : ArgumentsClientCreateUpdate){
        return await update({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }

    /**
     * @name delete
     * @description
     * This method is used to delete datas in Airtable Table
     * @param arg ArgumentsClientDelete
     * @example
     * tableInstance.delete({
     *  id: 'RECORD_ID',
     *  action: (datas) => {
     *      console.log(datas)
     *  }
     * })
     */
    async delete(arg: ArgumentsClientDelete){
        return await deleteData({base: this.base, id: arg.id, table: this.table, action: arg.action})
    }
}