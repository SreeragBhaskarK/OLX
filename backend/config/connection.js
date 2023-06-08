import { config } from 'dotenv'
config()
import { connect } from 'mongoose'

const connecting = async () => {
    try {
        connect(process.env.MONGODB_URL, {
            dbName: "OLX",
            useNewUrlParser:true,
            useUnifiedTopology:true

        }).catch(error => {
            console.log(error.message, '⚠️⚠️⚠️');
        })
        console.log("Connected sucessfully to server🚀🚀🚀");
    }
    catch (error) {
        console.log(error.message, '⚠️⚠️⚠️');
    }
}

connecting()
