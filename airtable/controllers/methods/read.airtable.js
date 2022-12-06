const read = (base, table, view, action = null ) => {

    const datas = []

    base(`${table}`).select({
        maxRecords: 100,
        view: view
    }).eachPage(function page(records, fetchNextPage){
        const recordsDatas = records.map((record) => ({id: record.id, fields: record.fields}));
        if(action){
            action(recordsDatas)
        }
        datas = [...recordsDatas]
        fetchNextPage()
        return datas
    }, function done(err) {
        if (err) { console.error(err); return; }
    })
}

export default read