var express = require('express');
var app=express();
var PORT = 3000;

// app.get('/',function(req,res){
// 	res.send('Hello express!');

// });

var middleware={
	requireAuthentication: function(req,res,next){
		//console.log('private route hit');
		next();
	},

	logger: function(req,res,next){
		new Date().toString();
		console.log('Request:' +req.method+ ' ' + req.originalUrl + new Date().toString());
		next();
	}
};


app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About us: We are very cool! Hola');

});


app.use(express.static(__dirname+'/public'));

//console.log(__dirname);



app.listen(PORT,function(){
	console.log('express server started on' + ' ' + PORT);
});