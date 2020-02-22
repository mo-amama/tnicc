const mongoose = require('mongoose'); 
const config = require('./config.json');
const MongoClient = require('mongodb').MongoClient;

mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true }).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//test connection to mongodb cloud using driver
/* MongoClient.connect(config.connectionString, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("distributor");
   // perform actions on the collection object
   client.close();
}); */

