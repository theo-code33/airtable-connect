interface Arguments {
    base: any;
    table: string;
    view: string;
    action: Function;
}
const readFunction = (arg : Arguments) => {

    arg.base(`${arg.table}`).select({
        view: arg.view
    }).eachPage(function page(records : object[]){
        const recordsDatas = records.map((record : any) => ({id: record.id, fields: record.fields}));
        if(arg.action){
            arg.action(recordsDatas)
        }
    }, function done(err : any) {
        if (err) { console.error(err); return; }
    })
}

module.exports = readFunction