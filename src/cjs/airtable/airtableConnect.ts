const AirtableConfig = require('./config/config.airtable.js')
const AirtableData = require('./controllers/controllers.airtable.js')

const AirtableConnectExport = {
    AirtableConfig,
    AirtableData
}

module.exports = AirtableConnectExport