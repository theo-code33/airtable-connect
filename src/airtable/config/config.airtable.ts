import Airtable from 'airtable'
/**
* @name AirtableConfig
* @description
* This class is used to connect to Airtable automatically by .env variables or with **getBase** method with API Key and Base ID in parameters
* @param apiKeyParams string
* @param baseIdParams string
* @returns {void}
* @example
* AirtableConfig.getBase('API_KEY', 'BASE_ID')
*/
const AirtableConfig = (function() : {getBase: Function} {
    let base : unknown | null = null;

    function createBase(apiKeyParams? : string, baseIdParams?: string) : void {
        let apiKey : string | undefined = process.env.AIRTABLE_PERSONNAL_TOKEN || process.env.REACT_APP_AIRTABLE_PERSONNAL_TOKEN || import.meta.env.VITE_AIRTABLE_PERSONNAL_TOKEN || apiKeyParams
        let baseID : string | undefined = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || import.meta.env.VITE_AIRTABLE_BASE_ID || baseIdParams
        base = new Airtable({apiKey: apiKey}).base(baseID ? baseID : '')
    }
    return {
        getBase: function(apiKeyParams? : string, baseIdParams? : string) : unknown | null {
            if (base == null) {
                createBase(apiKeyParams, baseIdParams)
            }
            return base;
        }
    }
})()

export { AirtableConfig }