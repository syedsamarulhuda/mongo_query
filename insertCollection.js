

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnMongo";

MongoClient.connect(url, function(err, db) {
  
  if (err) throw err;
 
  var myobj = { city: "Patna", state: "U.P",create_date:Date.now };
  
  db.collection("City").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});