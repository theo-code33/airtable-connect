"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
function create(arg) {
    const newDatas = [{
            fields: Object.assign({}, arg.datas)
        }];
    arg.base(`${arg.table}`).create(newDatas, function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            if (arg.action) {
                arg.action(record);
            }
        });
    });
}
exports.create = create;
