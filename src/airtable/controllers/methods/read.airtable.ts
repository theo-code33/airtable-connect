export const read = (base : any, table : string, view : string, action : any ) => {

    base(`${table}`).select({
        view: view
    }).eachPage(function page(records : any[]){
        const recordsDatas = records.map((record : any) => ({id: record.id, fields: record.fields}));
        if(action){
            action(recordsDatas)
        }
    }, function done(err : any) {
        if (err) { console.error(err); return; }
    })
}