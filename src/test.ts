import * as MongoDB from "mongodb";

const uri = 'mongodb://a:27017,b:27017,c:27017/?replicaSet=replset';

const wait = (sec:number) => {
    return new Promise((resolve, reject) => {setTimeout(resolve, sec * 1000);});
};

(async () => {
    let mongo = await MongoDB.MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});
    let testdb = mongo.db("testdb");
    let col = testdb.collection("col");
    await col.insertOne({ id: 1, text: "hogehoge"});
    for (let i: number = 0; i <= 100000; i++) {
        console.log(`${i}times`)
        console.log(`waiting....`)
        await wait(5);
        try{
            let id = await col.findOne({ id: 1 });
            console.log(id);
        } catch (e) {
            console.log(e);
            mongo.close();
            mongo = await MongoDB.MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true,});
            testdb = mongo.db("testdb");
            col = testdb.collection("col");
            continue;
        }
    }
    mongo.close();
})();