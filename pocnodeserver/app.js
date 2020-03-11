const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const middleware_cors = require('./middlewares/cors');
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(middleware_cors);
app.use('/',userRoutes);
app.listen(process.env.PORT || '4000',function(err,d){
  if(err){
      console.log('Error occured!');
  }
  console.log('Server has been started!');
});