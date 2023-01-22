// import * as dotenv from 'dotenv';
// const viteEnv = import.meta.env
// dotenv.config();
// if(!viteEnv){
//     dotenv.config();
// }
import Airtable from 'airtable'

const AirtableConfig = (function() : {getBase: Function} {
    let base : unknown | null = null;

    function createBase(apiKeyParams? : string, baseIdParams?: string) : void {
        // const apiKey = process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams
        // const baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams
        const apiKey = apiKeyParams
        const baseID = baseIdParams
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

export { AirtableConfig }