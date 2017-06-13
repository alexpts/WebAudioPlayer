let express = require('express'), //Подключение express
    app = express();

let exhb = require('express-handlebars'), //Подключение основных NPM модулей
    sessions = require('express-session'),
    mysql = require('mysql'),
    io = require('socket.io');

let config = require('./config.js'),  //Подключение локальных модулей
    UserController = require('./controllers/UserController.js');
UserController(app);
app.listen(config.port, (err) => {
  err ? console.log(`Ошибка`) : console.log(`Сервер запущен на ${config.port} порту`)
})
