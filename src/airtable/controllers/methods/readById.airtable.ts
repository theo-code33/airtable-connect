export const readByID = (arg : ArgumentsReadByID) => {
    arg.base(`${arg.table}`).find(arg.id, function(err : any, record : any) {
        if(err){
            if(err.error == "NOT_AUTHORIZED"){
                console.error("AIRTABLE CONNECT ERROR: The id you provided is not valid. Please check your id and try again.");
                return;
            }
            console.error(err);
            return;
        }
        if(arg.action){
            arg.action(record)
        }
    })
}