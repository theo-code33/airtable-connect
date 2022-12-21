export function deleteData(base : any, id : String, table : String, action : any){

    base(`${table}`).destroy([`${id}`], function(err : any, deletedRecords : any) {
        if (err) {
          console.error(err);
          return;
        }
        if(action){
            action(deletedRecords)
        }
      });
}