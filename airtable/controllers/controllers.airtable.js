const AirtableConfig = require("../config/config.airtable")

module.exports = class AirtableData extends AirtableConfig{
    constructor(table, view) {
        super()
        this.table = table
        this.view = view || 'Grid view'
    }

    checkData(){
        console.log('base :',this.base);
        console.log('apiKey :',this.apiKey);
        console.log('table :',this.table);
        console.log('view :',this.view);
    }
}