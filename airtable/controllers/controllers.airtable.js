const AirtableConfig = require("../config/config.airtable")
const read = require('./methods/read.airtable')

module.exports = class AirtableData extends AirtableConfig{
    constructor(table, view) {
        super()
        this.table = table
        this.view = view || 'Grid view'
    }

    checkData(){
        console.log('baseID :',this.baseID);
        console.log('base :',this.base);
        console.log('apiKey :',this.apiKey);
        console.log('table :',this.table);
        console.log('view :',this.view);
    }
    async read(action){
        return await read(this.base, this.table, this.view, action)
    }
}