var express = require('express');
const rutaAutorizada = express.Router();
var jtw =require('jsonwebtoken');
 rutaAutorizada.use( ( req , res , next )=>{
   var token= req.session.token;
   var clave = process.env.SECRETO||'dios1234';
   if(token){
     jwt.verify(token,clave,(err ,decoded )=>{
       if(err)res.json({mensaje: "token invalido"});
       if(decode)next(); 
     });
   }else{
     res.json({mensaje :"No token, realiza el proceso de login para obtener uno "});
   }
 });


module.exports=rutaAutorizada ;
