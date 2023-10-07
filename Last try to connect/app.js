const express = require("express");
const app = express();

const { MongoClient } = require('mongodb');

// Replace 'mongodb://localhost:27017' with your MongoDB connection string
const uri = 'mongodb+srv://sarmin:zahan@cluster0.gihn8pl.mongodb.net/BASATEngineeringEnterprise?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

 connectToMongoDB();


module.exports = app;