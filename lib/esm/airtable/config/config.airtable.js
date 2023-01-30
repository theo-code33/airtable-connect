import Airtable from 'airtable';
const AirtableConfig = (function () {
    let base = null;
    function createBase(apiKeyParams, baseIdParams) {
        const apiKey = process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams;
        const baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams;
        base = new Airtable({ apiKey: apiKey }).base(baseID ? baseID : '');
    }
    return {
        getBase: function (apiKeyParams, baseIdParams) {
            if (base == null) {
                createBase(apiKeyParams, baseIdParams);
            }
            return base;
        }
    };
})();
export { AirtableConfig };
