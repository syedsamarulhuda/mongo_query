
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnMongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("Users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    console.log(result.address);
    db.close();
  });
});