//Подключение express
let express = require('express'),
    app = express();
//Подключение основных NPM модулей
let exhb = require('express-handlebars');
let session = require('express-session');
let mysql = require('mysql');
let io = require('socket.io');
let bodyParser = require('body-parser');
//Подключение локальных модулей
let config = require('./config.js');
let UserController = require('./controllers/UserController.js');
let Router = require('./router.js');
app.use(session({ secret: 'GkGjsYUdfLdsB', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('handlebars', exhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(Router);

app.listen(config.port, (err) => {
  err ? console.log(`Ошибка`) : console.log(`Сервер запущен на ${config.port} порту`)
})
