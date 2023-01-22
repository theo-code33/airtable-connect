"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtableConnect = void 0;
const config_airtable_js_1 = require("./config/config.airtable.js");
const controllers_airtable_js_1 = require("./controllers/controllers.airtable.js");
exports.AirtableConnect = {
    AirtableConfig: config_airtable_js_1.AirtableConfig,
    AirtableData: controllers_airtable_js_1.AirtableData
};
