'use strict';
module.exports = function(app) {
  var todoList = require('../controller/controller');

  

  app.route('/fxn')
    .get(todoList.saludo)  

 

};