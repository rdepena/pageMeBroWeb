var express = require('express'),
    http = require('http'),
    path = require('path'),
    favicon = require('static-favicon'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    socket = require('./sockets');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(require('connect').bodyParser());
app.use(favicon());
app.use(express.methodOverride());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(app.router);

app.get('/', function(req, res){
    res.render('index.html', { title: 'Page me bro' });
});

app.post('/page', function (req, res) {
    socket.io.sockets.emit('message:new', { message: req.body.message});
    res.end('sent');
});


module.exports = app;
