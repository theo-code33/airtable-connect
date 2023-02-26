# Airtable Configuration
This package is used to configure the Airtable integration for your project.

## Getting Started

### Installation

```bash
npm install --save @theo-dev/airtable-connect
```

Create a ```.env``` file in the root of your project and add the following:

```bash
# If you use NodeJS or VanillaJS, you can add the following to your .env file
# Install dotenv package to use .env file
AIRTABLE_PERSONNAL_TOKEN=
AIRTABLE_BASE_ID=

# If you use React, you can add the following to your .env file
REACT_APP_AIRTABLE_PERSONNAL_TOKEN=
REACT_APP_AIRTABLE_BASE_ID=

```

&nbsp;
### Usage

- Connection to Airtable

    ```javascript
    // If you create a .env file, you can use the following code to connect to Airtable
    import { AirtableConnect } from '@theo-dev/airtable-connect'

    const { AirtableData } = AirtableConnect

    const tableInstance = new AirtableData('Table Name', 'View Name (optional if you want to use the default view)')
    ```

    ```javascript
    // If you don't create a .env file, you can use the following code to connect to Airtable
    import { AirtableConnect } from '@theo-dev/airtable-connect'

    const { AirtableConfig, AirtableData } = AirtableConnect

    AirtableConfig.getBase('Personnal Token', 'Base ID')

    const tableInstance = new AirtableData('Table Name', 'View Name (optional if you want to use the default view)')

    ```

- Retrieving Data

    Add ```function``` in parameter of read function to get the data like this:

    ```javascript
    let data = []

    tableInstance.read((dataset) => {
        data = dataset
    })
    ```

- Creating Data

    ```javascript
    // Create a record

    tableInstance.create({
        datas: { 'Field Name': 'Field Value' }
    }) // return nothing just create the record
    ```

    You can also add ```function``` in parameter of create function to get the data like this:

    ```javascript
    let newRecord = []

    tableInstance.create({
        datas: { 'Field Name': 'Field Value' }, 
        action: (record) => {
            newRecord = record
        }
    }) // return nothing just create the record and add the new record in newRecord variable
    ```
- Updating Data

    ```javascript
    // Update a record
    tableInstance.update({
        datas: {'id': 'ExampleID', 'fields': {'FieldName': 'Field Value'}}
    }) // return nothing just update the record

    // Update multiple records

    const records = [
        {
            'id': 'ExampleID', 
            'fields': {'FieldName': 'Field Value'}
        }, 
        {
            'id': 'ExampleID', 
            'fields': {'FieldName': 'Field Value'}
        }
    ]

    tableInstance.update({
        datas: records
    }) // return nothing just update records
    ```

    You can also add ```function``` in parameter of update function to get the data like this:

    ```javascript
    let updatedRecord = []

    tableInstance.update({
        datas: {'id': 'ExampleID', 'fields': {'FieldName': 'Field Value'}},
        action: (record) => {
            updatedRecord = record
        }
    })
    ```

- Deleting Data

    Add ```function``` in parameter of delete function to get the deleted data like this:

    ```javascript

    let deletedRecord = []

    tableInstance.delete('ExampleID', (record) => {
        deletedRecord = record
    })
    ```

## Package Dependencies

[![Airtable](https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white)](https://airtable.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Credits

- Author - [**Théo Gillet**](https://portfolio.theogillet.fr/)
