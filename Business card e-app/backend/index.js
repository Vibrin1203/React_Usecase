const express = require("express");
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());

const PORT = 5000;
var mongoClient = require("mongodb").MongoClient;
var dburl = "";
let db;
let userDb;
mongoClient.connect(dburl, function (err, client) {
    if (err) {
        console.log("err while connecting db");
        console.log(err);
    } else {
        db = client.db("login");
        userDb = db.collection("form");
        // console.log(userDb);
        console.log("connected to db");
    }
});
app.get("/adddetails", async (req, res) => {
    // console.log("email",params.uname);
    userDb.find().toArray(function(err,result){
        if(err) console.log(err);
        else res.send(result)
    })
})
app.post("/adddetails", async (req, res) => {
    userDb.insert(req.body)
})

app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application running on: ${PORT}`);
})