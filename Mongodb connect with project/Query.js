//Create a new collection.
use("CraftShop")
db.createCollection("ProductDetails")

//Removes a collection from the database.
use("CraftShop")
db.ProductDetails.drop()

//Inserts a single document into a collection.
use("CraftShop")
db.ProductDetails.insertOne(
    {
        "Name": "Samsung",
        "Price":26000,
        "CreateDate":ISODate(),

    }
)

//Delete/remove a single document from the collection.
use("CraftShop")
db.ProductDetails.deleteOne({
    "Name": "Samsung"
})

/* const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the server
client.connect(function (err) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected successfully to server');

    const db = client.db(dbName);

    // 1. Create a new collection
    db.createCollection('mycollection', function (err, res) {
        if (err) {
            console.error('Error creating collection:', err);
            client.close();
            return;
        }
        console.log('Collection created successfully');

        // 2. Remove a collection from the database
        db.dropCollection('mycollection', function (err, result) {
            if (err) {
                console.error('Error dropping collection:', err);
                client.close();
                return;
            }
            console.log('Collection removed successfully');

            // 3. Insert a single document into a collection
            const collection = db.collection('mycollection');
            const document = { name: 'John', age: 30 };
            collection.insertOne(document, function (err, result) {
                if (err) {
                    console.error('Error inserting document:', err);
                    client.close();
                    return;
                }
                console.log('Document inserted successfully');

                // 4. Delete/remove a single document from the collection
                collection.deleteOne({ name: 'John' }, function (err, result) {
                    if (err) {
                        console.error('Error deleting document:', err);
                        client.close();
                        return;
                    }
                    console.log('Document deleted successfully');

                    // Close the MongoDB client
                    client.close();
                });
            });
        });
    });
});
*/

/