require('dotenv').config()

module.exports = class AirtableConfig {
    constructor(base, apiKey){
        this.apiKey = process.env.AIRTABLE_API_KEY || apiKey
        this.base = process.env.AIRTABLE_BASE || base
    }
    
}