interface Arguments {
    base: any;
    datas: Array<Datas>;
    table: string;
    action: any;
}
export function update(arg : Arguments){
    const newDatas =[arg.datas] 

    arg.base(`${arg.table}`).update(
      newDatas
        , function(err : any, records : any[]) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record : any) {
          if(arg.action){
            arg.action(record)
          }
        });
      });
}