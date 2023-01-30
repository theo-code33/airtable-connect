"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtableConfig = void 0;
// import 'dotenv/config'
// import * as dotenv from 'dotenv';
// dotenv.config();
// const viteEnv = import.meta.env
// if(!viteEnv){
//     dotenv.config();
// }
const airtable_1 = __importDefault(require("airtable"));
const AirtableConfig = (function () {
    let base = null;
    function createBase(apiKeyParams, baseIdParams) {
        const apiKey = process.env.AIRTABLE_API_KEY || process.env.REACT_APP_AIRTABLE_API_KEY || apiKeyParams;
        const baseID = process.env.AIRTABLE_BASE_ID || process.env.REACT_APP_AIRTABLE_BASE_ID || baseIdParams;
        // const apiKey = apiKeyParams
        // const baseID = baseIdParams
        base = new airtable_1.default({ apiKey: apiKey }).base(baseID ? baseID : '');
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
exports.AirtableConfig = AirtableConfig;
