var mongoose = require('mongoose');

var conn =  function () {
    mongoose.connect('mongodb://localhost:27017/mydb')

    var db = mongoose.connection;
    
    db.on('error', function() {
        console.log("Connection failed");
    })
    
    db.once('open', function() {
        console.log('connect!');
    })
};

module.exports = conn;

// function getSt() {
//     return new Promise(function(res,rej) {
//         students.find(function(error, students){
//             console.log('--- Read all ---');
//             if(error){
//                 console.log(error);
//             }else{
//                 re = students;
//                 res(re);
//                 db.close()
//             }
//         })
//     })
// }
// async function listSt() {
//     try {
//     var a = await getSt()
//     console.log(a)
//     } catch(err) {
//         console.log(err);
//     }
// }


