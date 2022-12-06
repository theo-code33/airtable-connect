function update(base ,datas, table, action = null){
    const newDatas =[datas] 

    base(`${table}`).update(
      newDatas
        , function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          if(action){
            action(record)
          }
          return record
        });
      });
}

export default update