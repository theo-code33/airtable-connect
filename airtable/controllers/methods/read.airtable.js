const read = (base, table, view, action = null) => {
    base(`${table}`).select({
        view: view
    }).eachPage(function page(records){
        const recordsDatas = records.map((record) => ({id: record.id, fields: record.fields}));
        action(recordsDatas)
        return recordsDatas
    })
}

module.exports = read