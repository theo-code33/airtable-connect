import AirtableConnect from '../../airtable/airtableConnect.js'

const { AirtableConfig } = AirtableConnect

// AirtableConfig.getBase('API_KEY', 'BASE_ID')

describe('Test AirtableConfig function', () => {
    it('Could return base when env variable is setting or if api key and base id was push in getBase function',() => {
        expect(AirtableConfig.getBase()).toBeDefined();
    })
    it('Could Throw error when env variable doesn\'t defided', () => {
        expect(AirtableConfig.getBase()).toThrow(new Error('You must specify Api Key and Base ID'))
    })
})