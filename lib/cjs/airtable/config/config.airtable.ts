const dotenv = require('dotenv')
const Airtable = require('airtable')

const viteEnv = import.meta.env
if(!viteEnv){
    dotenv.config();
}

const AirtableConfigFunction = (function() : {getBase: Function} {
    let base : unknown | null = null;

    function createBase(apiKeyParams? : string, baseIdParams?: string) : void {
        const apiKey = !viteEnv ? process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams : viteEnv.VITE_AIRTABLE_API_KEY || apiKeyParams
        const baseID = !viteEnv ? process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams : viteEnv.VITE_AIRTABLE_BASE_ID || baseIdParams
        base = new Airtable({apiKey: apiKey}).base(baseID ? baseID : '')
    }

    return {
        getBase: function(apiKeyParams? : string, baseIdParams? : string) {
            if (base == null) {
                createBase(apiKeyParams, baseIdParams)
            }
            return base;
        }
    }
})()

module.exports = AirtableConfigFunction