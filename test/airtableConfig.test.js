import AirtableConnect from '../airtable/airtableConnect.js'
import assert from 'assert'

const { AirtableConfig } = AirtableConnect

AirtableConfig.getBase('API_KEY', 'BASE_ID')

describe('Test AirtableConfig function', () => {
    it('Could Throw error when env variable doesn\'t defided', () => {
        expect(() => { AirtableConfig.getBase() }).toThrow()
    })
    it('Could return base when env variable is setting or if api key and base id was push in getBase function',() => {
        assert.notExists(AirtableConfig.getBase());
    })
})