require('dotenv').config()
const Airtable = require("Airtable")
module.exports = class AirtableConfig {
    constructor(baseID, apiKey){
        this.apiKey = process.env.AIRTABLE_API_KEY || apiKey
        this.baseID = process.env.AIRTABLE_BASE_ID || baseID
        this.base = new Airtable({apiKey: this.apiKey}).base(this.baseID)
    }
}