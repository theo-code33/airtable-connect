import * as dotenv from 'dotenv'
const viteEnv = import.meta.env
if(!viteEnv){
    dotenv.config()
}
import Airtable from 'Airtable'
const AirtableConfig = (() => {
    let base = null;
    return new function(){
        this.getBase = (apiKeyParams, baseIdParams) => {
            if (base === null) {
                const apiKeyData = !viteEnv ? process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams : viteEnv.AIRTABLE_API_KEY || apiKeyParams
                const baseIDData = !viteEnv ? process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams : viteEnv.AIRTABLE_BASE_ID || baseIdParams
                const apiKey = apiKeyData
                const baseID = baseIDData
                base = new Airtable({apiKey: apiKey}).base(baseID)
            }
            return base;
        }
    }
})()

export default AirtableConfig 