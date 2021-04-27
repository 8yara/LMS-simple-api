const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb+srv://yara:25819982581998@cluster0.fvbez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'




const client = new MongoClient(connectionURL);
 
 // The database to use
 const dbName = "myFirstDatabase";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         
         
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);