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
                const apiKey = !viteEnv ? process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams : viteEnv.VITE_AIRTABLE_API_KEY || apiKeyParams
                const baseID = !viteEnv ? process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams : viteEnv.VITE_AIRTABLE_BASE_ID || baseIdParams
                base = new Airtable({apiKey: apiKey}).base(baseID)
            }
            return base;
        }
    }
})()

export default AirtableConfig