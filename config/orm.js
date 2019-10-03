var connection = require("./connection.js");

var orm = {

    selectAll: function (tableInput) {
        var queryString = "SelectAll * FROM ??"; 
        connection.query( queryString, [tableInput], function (err, result){
         if (err) throw err;
         console.log(result);   
        });
    },
    insertOne: function (tableInput) {
        var queryString = "SelectAll * FROM ??"; 
        connection.query( queryString, [tableInput], function (err, result){
         if (err) throw err;
         console.log(result);   
        });
    },
    updateOne: function (tableInput) {
        var queryString = "SelectAll * FROM ??"; 
        connection.query( queryString, [tableInput], function (err, result){
         if (err) throw err;
         console.log(result);   
    
        });
    }




}



// Export the orm object for the model (cat.js).
module.exports = orm;