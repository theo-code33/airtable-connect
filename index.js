const AirtableConfig = require('./airtable/airtable').AirtableData

const a = new AirtableConfig('qfdsgvx', 'wvxbdf')
const b = new AirtableConfig('qsfmdslgkjezrmlsfk', 'azertyuiop')


a.checkData()
b.checkData()