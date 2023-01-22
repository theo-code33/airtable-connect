export function create(arg) {
    const newDatas = [{
            fields: {
                ...arg.datas
            }
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
