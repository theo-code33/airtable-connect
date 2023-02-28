interface Datas {
  fields: {
      [key: string]: any
  }
}

interface Arguments {
  base: any;
  datas: Array<Datas>;
  table: string;
  action?: Function;
}

export function create(arg : Arguments) : (void | any){

    const newDatas =[{
      fields: {
        ...arg.datas
      }
    }] 

    arg.base(`${arg.table}`).create(
        newDatas
        , function(err : any , records : object[]) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record : object) {
          if(arg.action){
            arg.action(record)
          }
        });
      });
}