import express, { Express } from "express"
import bodyParser = require("body-parser");
import { Router } from "express";
import { router } from "./routes/author";
import { bookRouter } from "./routes/book"


const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())


app.use("/v1/authors", router)
app.use("/v1/books", bookRouter)


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})