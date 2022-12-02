const read = (base, table, view, action = null ) => {
    base(`${table}`).select({
        view: view
    }).eachPage(function page(records){
        const recordsDatas = records.map((record) => ({id: record.id, fields: record.fields}));
        if(action){
            action(recordsDatas)
        }
        return recordsDatas
    }, function done(err) {
        if (err) { console.error(err); return; }
    })
}

module.exports = read