import { AirtableConfig } from "./config/config.airtable.js"
import { AirtableData } from "./controllers/controllers.airtable.js"

/**
 * @name AirtableConnect
 * @description
 * AirtableConnect connect you to Airtable API and give you access to AirtableData class to create, read, update and delete datas in your Airtable tables
 */
export const AirtableConnect = {
    AirtableConfig,
    AirtableData
}
