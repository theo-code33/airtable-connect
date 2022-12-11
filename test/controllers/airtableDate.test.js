import AirtableData from "../../airtable/controllers/controllers.airtable";

const airtableData = new AirtableData('test')
const dataSet= [
  {
      id: "rec11vleTNoDfJzyc",
      fields: {
          Notes: "testNote",
          Name: "testName"
      }
  },
  {
      id: "recmZWfH3IswvXOjQ",
      fields: {
          Name: "sergh",
          Notes: "dfghnfh"
      }
  },
  {
      id: "recL8Ak9Bnp2zYBwE",
      fields: {
          Name: "dsf",
          Notes: "dfghnfh"
      }
  }
]
const deletedData = [
  {
    id: 'recjpCrbOb1N8MnRv',
    fields: { Notes: 'testNote', Name: 'testName' }
  }
]
describe('Test AirtableDate class', () => {
    it('Could return my data', () => {
      airtableData.read((response) => { 
        expect(response).toStrictEqual(dataSet)
      })
    })
    it('Could delete data', () => {
      airtableData.delete('recjpCrbOb1N8MnRv', (response) => {
        expect(response).toStrictEqual(deletedData)
      })
    })
})