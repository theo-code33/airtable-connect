interface Arguments {
  base: any;
  id: string;
  table: string;
  action?: Function;
}
export function deleteData(arg : Arguments) : (void | any){

    arg.base(`${arg.table}`).destroy([`${arg.id}`], function(err : any, deletedRecords : object | object[]) {
        if (err) {
          console.error(err);
          return;
        }
        if(arg.action){
            arg.action(deletedRecords)
        }
      });
}