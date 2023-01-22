"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
function update(arg) {
    const newDatas = [arg.datas];
    arg.base(`${arg.table}`).update(newDatas, function (err, records) {
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
exports.update = update;
