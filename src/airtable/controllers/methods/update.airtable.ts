interface Datas {
  fields: {
      [key: string]: any
  }
}

export function update(base : any ,datas : Array<Datas>, table : String, action : any){
    const newDatas =[datas] 

    base(`${table}`).update(
      newDatas
        , function(err : any, records : any) {
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