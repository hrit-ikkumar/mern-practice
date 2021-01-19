var mongodb = require('mongodb'); // mongodb module imported

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/dummy';

MongoClient.connect(url, function(err, db){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('Connected to db ', url);
        db.close();
    }
});