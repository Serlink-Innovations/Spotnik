//Connect to mongodb
import mongoose from "mongoose";

const connectdb = "mongodb+srv://connectUser:swYQnDKrZvM49ILl@wefoods.yhrxghe.mongodb.net/wefoods?retryWrites=true&w=majority";
mongoose.connect(connectdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => console.log("Database Connected Successfully")).catch((err) => console.log(err));

console.log(`${connectdb} Connected Successfully`);