let express = require('express'), //Подключение express
    app = express();

let exhb = require('express-handlebars'), //Подключение основных NPM модулей
    session = require('express-session'),
    mysql = require('mysql'),
    io = require('socket.io'),
    bodyParser = require('body-parser');

let config = require('./config.js'),  //Подключение локальных модулей
    UserController = require('./controllers/UserController.js');

app.use(session({ secret: 'GkGjsYUdfLdsB', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('handlebars', exhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

UserController(app);

app.listen(config.port, (err) => {
  err ? console.log(`Ошибка`) : console.log(`Сервер запущен на ${config.port} порту`)
})
