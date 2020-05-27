const express=require('express');

var writerRouter=express.Router();
var mysql=require('mysql');
const connection=require('../connection');
const bodyParser=require('body-parser');

writerRouter.use(bodyParser.json());

writerRouter.route('/log')
.post(function(req,res){
       var email=req.body.email
       var password=req.body.password

    
    connection.query("select * from writers where email= '"+email+"' && password='"+password+"'",function(err,rows){
        console.log(err);
        if(err) throw err;
        if(rows.length!=0){
        res.statusCode=200;
        res.render('account',{writer:rows});
        }
        else
          res.end('No Account')
    })
    
})

// writerRouter.route('/signin')
// .post(function(req,res){
//     res.render('signin');
// })

writerRouter.route('/signinLog')
.get(function(req,res){
    res.render('signinLog');
})

writerRouter.route('/create')
.post(function(req,res){

    var newWriter={ email:req.body.email,
     name:req.body.name,
     password:req.body.password
    }
    connection.query('insert into writers set?',newWriter,function(err){
        if(err) throw err;

        else
        res.redirect('/');
    })

})

writerRouter.route('/top')
.get(function(req,res){
    connection.query('select*from writers',function(err,row){
        if(err) throw err;
        res.render('index',{top_10:row});
    })
})


module.exports=writerRouter;