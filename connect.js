const {
    MongoClient
} = require('mongodb');

async function main() {
    // we'll add code here soon
}

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = "mongodb+srv://mongo:eQ4oAA62M6fdoagd@wefoods.yhrxghe.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);