import * as MongoDB from "mongodb";

const uri = 'mongodb://a:27017,b:27017,c:27017/?replicaSet=replset';

const wait = (sec:number) => {
    return new Promise((resolve, reject) => {setTimeout(resolve, sec * 1000);});
};

(async () => {
    const mongo = await MongoDB.MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    const testdb = mongo.db("testdb");
    const col = testdb.collection("col");
    await col.insertOne({ id: 1, text: "hogehoge"});
    for (let i: number = 0; i <= 100000; i++) {
        console.log(`${i}times`)
        console.log(`waiting....`)
        await wait(5);
        let id = await col.findOne({ id: 1 })
        console.log(id);
    }
    mongo.close();
})();
