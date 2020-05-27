const mysql=require('mysql');
const connection=require('../connection');
const express=require('express');
const bodyParser=require('body-parser');



const articleRouter=express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route('/create')
.post(function(req,res){

    var aricleDetails={
        title:req.body.title,
        article_body:req.body.article_body,
        email:req.body.email
    }
    var new_article='Post the new article';
   connection.query('insert into articles set?',aricleDetails,function(err,row){
       if(err) throw err;
      
       res.redirect('/');
   })

})

articleRouter.route('/search')
.get(function(req,res){

    
     //connection.query("select*from articles ",function(err,rows){
     connection.query("select*from articles where  title = '"+req.body.title+"'",function(err,rows){
    
        if(err) throw err;
        
        
            console.log(rows)
            res.render('searchResult',{result:rows});
        
    })

})

articleRouter.route('/all')
.get(function(req,res){
    connection.query('select*from articles',function(err,row){
        if(err) throw err;
        res.render('allArticles',{article:row});
    })
})

articleRouter.route('/top')
.get(function(req,res){
   
        connection.query('select*from articles limit 10',function(err,row){
            if(err) throw err;
            res.render('index',{top_10:row});
        })
    
})


module.exports=articleRouter;