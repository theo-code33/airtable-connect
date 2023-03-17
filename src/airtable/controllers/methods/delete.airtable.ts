export function deleteData(arg : ArgumentsDelete) : (void | any){

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