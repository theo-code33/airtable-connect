const AirtableConfig = require("../config/config.airtable")

module.exports = class AirtableData extends AirtableConfig{
    constructor(table, view) {
        super()
        this.table = table
        this.view = view || 'Grid view'
    }

    config(apiKey, base){
        this.apiKey = process.env.AIRTABLE_API_KEY || apiKey
        this.base = process.env.AIRTABLE_BASE || base
    }

    checkData(){
        console.log('base :',this.base);
        console.log('apiKey :',this.apiKey);
        console.log('table :',this.table);
        console.log('view :',this.view);
    }
}