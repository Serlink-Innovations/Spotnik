const {
    MongoClient
} = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://mongo:eQ4oAA62M6fdoagd@wefoods.yhrxghe.mongodb.net/wefoods?retryWrites=true&w=majority";

    console.log(uri);

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);