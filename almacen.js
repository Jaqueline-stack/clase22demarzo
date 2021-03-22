var express= require('express');
var router= express.Router();
var session= require ('express-session');
var chekAutorizacion = require ('../autorizacion/general');

router.get('/alta',chekAutorizacion,(req, res, next)=>{
  var ses= req.session;
  res.render ("almacen/frmAlta",{user: ses.userdata,tokeen:ses.token});
});

router.get('/reporte',(req, res, next)=>{
  var ses= req.session;
  res.render ("almacen/frmReporte",{user: ses.userdata});
});

router.get('/bajas',(req, res, next)=>{
  var ses= req.session;
  res.render ("almacen/frmBaja",{user: ses.userdata});
});



module.exports= router;
