const AirtableConfigInit = require('../config/config.airtable.js')
const create = require('./methods/create.airtable.js')
const deleteData = require('./methods/delete.airtable.js')
const read = require('./methods/read.airtable.js')
const update = require('./methods/update.airtable.js')

interface ArgumentsCreateUpdate {
    datas: Array<Datas>;
    action: Function;
}

class AirtableDataClass{
    base : any;
    table : string;
    view : string;

    constructor(table : string, view : string | undefined) {
        this.base = AirtableConfigInit.getBase();
        this.table = table
        this.view = view || 'Grid view'
    }
    async read(action: Function) : Promise<unknown> {
        return await read({base: this.base, table: this.table, view: this.view, action: action})
    }
    async create(arg : ArgumentsCreateUpdate){
        return await create({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }
    async update(arg : ArgumentsCreateUpdate){
        return await update({base: this.base, datas: arg.datas, table: this.table, action: arg.action})
    }
    async delete(id : string, action : Function){
        return await deleteData({base: this.base, id: id, table: this.table, action: action})
    }
}

module.exports = AirtableDataClass