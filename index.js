const express = require('express');
const routes = require('./routes/api');


//set up express app

const app = express();
app.use('/api', routes);

//listen for requests at:
//process.env.port is for deployed servers with environment ports
app.listen(process.env.port || 4000, function(){
	console.log('now listening for requests');
});
