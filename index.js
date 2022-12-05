const Airtable = require('./airtable/airtable')
const AirtableConfig = Airtable.AirtableConfig
// AirtableConfig.getBase('keyChSephx5tcEfAn', 'appEIAFiO69jT2NCH');
const AirtableData = Airtable.AirtableData

const a = new AirtableData('COMMANDES')
// const b = new AirtableData('PRODUITS')
function log(datas){
    console.log(datas)
}
// a.checkData()
// b.checkData()
a.read(log)
// b.read()