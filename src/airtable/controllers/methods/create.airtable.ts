interface Datas {
  fields: {
      [key: string]: any
  }
}

export function create(base : any, datas : Array<Datas>, table : string, action : any){

    const newDatas =[{
      fields: {
        ...datas
      }
    }] 

    base(`${table}`).create(
        newDatas
        , function(err : any , records : any) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record : any) {
          console.log(record.getId());
          if(action){
            action(record)
          }
        });
      });
}