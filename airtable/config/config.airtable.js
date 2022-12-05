require('dotenv').config()
const Airtable = require("Airtable")
// module.exports = class AirtableConfig {
//     constructor(apiKey, baseID){
//         this.apiKey = process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKey
//         this.baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseID
//         this.base = new Airtable({apiKey: this.apiKey}).base(this.baseID)
//     }
// }
const AirtableConfig = (() => {
    
    let base = null;
    return new function(){
        this.getBase = (apiKeyParams, baseIdParams) => {
            if (base === null) {
                const apiKey = process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams
                const baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams
                base = new Airtable({apiKey: apiKey}).base(baseID)
            }
            return base;
        }
    }
})()

module.exports = AirtableConfig 