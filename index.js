const AirtableData = require('./airtable/airtable').AirtableData

const a = new AirtableData('COMMANDES')
const b = new AirtableData('qsfmdslgkjezrmlsfk', 'azertyuiop')


a.checkData()
a.read()
b.checkData()