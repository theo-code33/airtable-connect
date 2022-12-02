const AirtableData = require('./airtable/airtable').AirtableData

const a = new AirtableData('COMMANDES')
const b = new AirtableData('PRODUITS')

a.checkData()
b.checkData()
a.read()
b.read()