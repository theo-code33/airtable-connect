export function update(base : any ,datas : Array<Datas>, table : string, action : any){
    const newDatas =[datas] 

    base(`${table}`).update(
      newDatas
        , function(err : any, records : any[]) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record : any) {
          if(action){
            action(record)
          }
        });
      });
}