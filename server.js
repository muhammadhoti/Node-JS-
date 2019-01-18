console.log("Hello Wolrd")

const express  = require('express');

const app = express();

const mongoose = require("./config/db")

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.listen(3000,()=>{
    console.log("Working")
})

app.use(express.json())

//For Single Parameter

/*  app.use('/user',(request,response)=>{
      console.log("Working ****")
      response.send("I Am Working")
  })
*/

//For Double Parameter

app.use('/',require('./routes/index.js'))

