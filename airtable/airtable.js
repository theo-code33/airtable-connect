class AirtableConfig {
    constructor(base, apiKey, table, view) {
        this.base = process.env.AIRTABLE_BASE || base
        this.apiKey = process.env.AIRTABLE_BASE || apiKey
        this.table = table
        this.view = view || 'Grid view'
    }
}