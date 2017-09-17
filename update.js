var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnMongo";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { age: 27};
  var newvalues = { name: "Syed Samarul Huda", address: "Patna Bihar" };
  db.collection("Users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});