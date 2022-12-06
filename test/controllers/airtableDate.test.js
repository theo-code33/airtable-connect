import AirtableData from "../../airtable/controllers/controllers.airtable";

const airtableData = new AirtableData('test')
const data = [
    {
      id: 'recjpCrbOb1N8MnRv',
      fields: { Name: 'testName', Notes: 'testNote' }
    }
  ]
describe('Test AirtableDate class', () => {
    test('Could return my data', async () => {
        const response = await airtableData.read()
        await expect(response).toBe(data)
    })
})