const AirtableConfig = require("../config/config.airtable")
const create = require("./methods/create.airtable");
const deleteData = require("./methods/delete.airtable");
const read = require('./methods/read.airtable');
const update = require("./methods/update.airtable");

module.exports = class AirtableData{
    constructor(table, view) {
        this.base = AirtableConfig.getBase();
        this.table = table
        this.view = view || 'Grid view'
    }

    checkData(){
        console.log('base :',this.base);
        console.log('table :',this.table);
        console.log('view :',this.view);
    }
    async read(action){
        return await read(this.base, this.table, this.view, action)
    }
    async create(datas, action){
        return await create(this.base, datas, this.table, action)
    }
    async update(datas, action){
        return await update(this.base ,datas, this.table, action)
    }
    async delete(id, action){
        return await deleteData(this.base, id, this.table, action)
    }
}