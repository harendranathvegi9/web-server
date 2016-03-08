var express = require('express');
var app=express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');


app.use(middleware.logger);

app.get('/jagan',middleware.requireAuthentication,function(req,res){
	res.send('Hello Jagan. Stay Calm.!');

});


app.use(express.static(__dirname+'/public'));

//console.log(__dirname);



app.listen(PORT,function(){
	console.log('express server started on' + ' ' + PORT);
});