export const read = (arg) => {
    arg.base(`${arg.table}`).select({
        view: arg.view
    }).eachPage(function page(records) {
        const recordsDatas = records.map((record) => ({ id: record.id, fields: record.fields }));
        if (arg.action) {
            arg.action(recordsDatas);
        }
    }, function done(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
};
