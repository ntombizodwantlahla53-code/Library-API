import express, { Express } from "express"
import bodyParser = require("body-parser");
import { Router } from "express";
import { router } from "./routes/author";


const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())


app.use("/v1/authors", router)



app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})