'use strict';
module.exports = function(app) {
  var todoList = require('../controller/controller');

  

  app.route('/crearTomcat')
    .get(todoList.crearTomcat)  

 

};