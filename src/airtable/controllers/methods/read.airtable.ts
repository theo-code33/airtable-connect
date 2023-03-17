export const read = (arg : ArgumentsRead) => {

    arg.base(`${arg.table}`).select({
        view: arg.view
    }).eachPage(function page(records : object[]){
        const recordsDatas = records.map((record : any) => ({id: record.id, fields: record.fields}));
        
        let responseDatas = recordsDatas;
        if(arg.completedOnly){
            responseDatas = responseDatas.filter((record : any) => Object.keys(record.fields).length !== 0)
        }
        if(arg.action){
            arg.action(responseDatas)
        }
    }, function done(err : any) {
        if (err) { console.error(err); return; }
    })
}