import AirtableConnect from '../../index.js'

const { AirtableConfig } = AirtableConnect

AirtableConfig.getBase('API_KEY', 'BASE_ID')

describe('Test AirtableConfig function', () => {
    test('Could Throw error when env variable doesn\'t defided', () => {
        expect(() => { AirtableConfig.getBase() }).toThrow()
    })
    test('Could return base when env variable is setting or if api key and base id was push in getBase function',() => {
        expect(AirtableConfig.getBase()).toBeDefined();
    })
})