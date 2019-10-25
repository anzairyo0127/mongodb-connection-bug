import readlineSync from "readline-sync";
import * as MongoDB from "mongodb";

const uri = 'mongodb://a:27017,b:27017,c:27017/?replicaSet=replset';

(async () => {
    let isConntinue:boolean = true;
    const mongo = await MongoDB.MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    const testdb = mongo.db("testdb");
    const col = testdb.collection("col");
    let count = 0;
    while (isConntinue) {
        count++;
        let ans = readlineSync.question(`[${count}]Send 'findOne()' query. type any key :`);
        if (ans == "q" || ans == "quit") {
            isConntinue = false;
        } else {
            console.log(await col.findOne({ id: 1 }));
        }
    }
    mongo.close();
})();