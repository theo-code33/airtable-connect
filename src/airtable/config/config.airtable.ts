import Airtable from 'airtable'

const AirtableConfig = (function() : {getBase: Function} {
    let base : unknown | null = null;

    function createBase(apiKeyParams? : string, baseIdParams?: string) : void {
        const apiKey = process.env.AIRTABLE_PERSONNAL_TOKEN || process.env.REACT_APP_AIRTABLE_PERSONNAL_TOKEN || apiKeyParams
        const baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams
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