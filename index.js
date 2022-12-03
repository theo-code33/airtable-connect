const Airtable = require('./airtable/airtable')
const AirtableConfig = Airtable.AirtableConfig
const apiKey = 'keyChSephx5tcEfAn'
const config = new AirtableConfig(apiKey, 'appEIAFiO69jT2NCH')
const AirtableData = Airtable.AirtableData

const a = new AirtableData('COMMANDES')
const b = new AirtableData('PRODUITS')

a.checkData()
b.checkData()
a.read()
b.read()