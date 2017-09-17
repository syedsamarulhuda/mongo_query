

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnMongo";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { age: 28};
  db.collection("Users").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});