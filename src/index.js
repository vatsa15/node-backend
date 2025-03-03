import "dotenv/config";
import connectDB from "./db/db.js"; // ✅ Use import correctly
import { app } from "./app.js";

connectDB() //✅ Call the function
.then(() => {

    



    app.on("error", (error) => {
        console.error("ERROR", error);
        throw error
        
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("Mongo db connection failed...!!", err)
})
  


/*
import { Express } from "express";

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR", error)
        throw err
    }
    
}) ()

*/