const express = require("express");
const mongoose = require("mongoose");
const dbconnect =express().mongoose;
/*
const uri = "mongodb://localhost:27017/CraftShop";

mongoose.connect(uri);
const userSchema = new mongoose.Schema({
    ProductName: String

});

const userModel = new mongoose.model("users", userSchema)


app.get("/getUser", (req,res)=>{
    userModel.find({}).then(function (user) {
        res.json(user)
    }).catch(function (err) {
        console.log(err)

    })
})*/

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sarmin:zahan@cluster0.gihn8pl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('BASATEngineeringEnterprise');
        const collection = db.collection('Job Catagories');

        // Find the first document in the collection
        const first = await collection.findOne({
            Name: "sarmin"});
        console.log(first);
        const cc = await collection.deleteOne({name:"sarmin zahan"})


    }
    finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
run().catch(console.error);


module.exports = run;



