var express = require('express');
var app=express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/jagan',middleware.requireAuthentication,function(req,res){
	res.send('Hello Jagan. Stay Calm.!');
	});

	app.get('/nandy',middleware.requireAuthentication,function(req,res){
	res.send('Hello Nandy. Love you loads.');
	});

	app.get('/azi',middleware.requireAuthentication,function(req,res){
	res.send('Hello Azz. Study. PLease..');
	});

	app.get('/manu',middleware.requireAuthentication,function(req,res){
	res.send('Hello Manu. Love you loads.');


});


app.use(express.static(__dirname+'/public'));

//console.log(__dirname);



app.listen(PORT,function(){
	console.log('express server started on' + ' ' + PORT);
});