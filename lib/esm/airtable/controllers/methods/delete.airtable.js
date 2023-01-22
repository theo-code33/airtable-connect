export function deleteData(arg) {
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
