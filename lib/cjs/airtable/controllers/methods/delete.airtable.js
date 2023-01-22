"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = void 0;
function deleteData(arg) {
    arg.base(`${arg.table}`).destroy([`${arg.id}`], function (err, deletedRecords) {
        if (err) {
            console.error(err);
            return;
        }
        if (arg.action) {
            arg.action(deletedRecords);
        }
    });
}
exports.deleteData = deleteData;
