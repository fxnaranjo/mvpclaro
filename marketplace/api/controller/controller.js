'use strict';

exports.saludo=function(req, res)
{
  var nombre=req.query.name;
  res.send('Hola '+nombre);
}