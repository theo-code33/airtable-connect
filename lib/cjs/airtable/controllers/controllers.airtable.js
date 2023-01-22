"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirtableData = void 0;
const config_airtable_js_1 = require("../config/config.airtable.js");
const create_airtable_js_1 = require("./methods/create.airtable.js");
const delete_airtable_js_1 = require("./methods/delete.airtable.js");
const read_airtable_js_1 = require("./methods/read.airtable.js");
const update_airtable_js_1 = require("./methods/update.airtable.js");
class AirtableData {
    constructor(table, view) {
        this.base = config_airtable_js_1.AirtableConfig.getBase();
        this.table = table;
        this.view = view || 'Grid view';
    }
    read(action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, read_airtable_js_1.read)({ base: this.base, table: this.table, view: this.view, action: action });
        });
    }
    create(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, create_airtable_js_1.create)({ base: this.base, datas: arg.datas, table: this.table, action: arg.action });
        });
    }
    update(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, update_airtable_js_1.update)({ base: this.base, datas: arg.datas, table: this.table, action: arg.action });
        });
    }
    delete(id, action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, delete_airtable_js_1.deleteData)({ base: this.base, id: id, table: this.table, action: action });
        });
    }
}
exports.AirtableData = AirtableData;
