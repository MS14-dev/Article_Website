const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mart',
    port:3306
});

connection.connect(function(err){
    
    if(err) throw err
    console.log('Connect to the database');
})

module.exports=connection;