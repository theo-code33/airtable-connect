# Airtable Configuration
This package is used to configure the Airtable integration for your project.

## Getting Started

### Installation

```bash
npm install --save airtable-connect
```

Create a ```.env``` file in the root of your project and add the following:

```bash
# If you use NodeJS or VanillaJS, you can add the following to your .env file
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=

# If you use React, you can add the following to your .env file
REACT_APP_AIRTABLE_API_KEY=
REACT_APP_AIRTABLE_BASE_ID=

```

&nbsp;
### Usage

- Connection to Airtable

    ```javascript
    import airtableConnect from 'airtable-connect'


    // If project is using React, NodeJS or VanillaJS, you can use the following to load the environment variables

    const { AirtableConfig, AirtableData } = airtableConnect

    const example = new AirtableData('Table Name', 'View Name (optional if you want to use the default view)')

    // Else you can use the following to load the environment variables
    AirtableConfig.getBase('API Key', 'Base ID')

    const { AirtableData } = airtableConnect

    const example = new AirtableData('Table Name', 'View Name (optional if you want to use the default view)')

    ```

- Retrieving Data

    ```javascript
    // Retrieve all records

    example.read() // return dataset
    ````

    You can also add ```function``` in parameter of read function to get the data like this:

    ```javascript
    let data = []

    example.read((dataset) => {
        data = dataset
    })
    ```

- Creating Data

    ```javascript
    // Create a record

    example.create({ 'Field Name': 'Field Value' }) // return dataset
    ````

    You can also add ```function``` in parameter of create function to get the data like this:

    ```javascript
    let newRecord = []

    example.create({ 'Field Name': 'Field Value' }, (record) => {
        newRecord = record
    })
    ```
- Updating Data

    ```javascript
    // Update a record
    example.update({'id': 'ExampleID', 'fields': {'FieldName': 'Field Value'}}) // return dataset

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

    example.update(records) // return dataset
    ```

    You can also add ```function``` in parameter of update function to get the data like this:

    ```javascript
    let updatedRecord = []

    example.update({'id': 'ExampleID', 'fields': {'FieldName': 'Field Value'}}, (record) => {
        updatedRecord = record
    })
    ```

- Deleting Data

    ```javascript
    // Delete a record

    example.delete('ExampleID') // return deleted data
    ```
    You can also add ```function``` in parameter of delete function to get the deleted data like this:

    ```javascript

    let deletedRecord = []

    example.delete('ExampleID', (record) => {
        deletedRecord = record
    })
    ```

## Package Dependencies

![Airtable](https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white)

## Credits

- Author - [**Théo Gillet**](https://www.theo-gillet.com/)
