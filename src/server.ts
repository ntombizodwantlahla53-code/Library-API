import express, { Express } from "express"
import bodyParser = require("body-parser");
import { Router } from "express";
import { router } from "./routes/author";
import { bookRouter } from "./routes/book"
import { loggerMiddleware } from "./middleware/logger";
import { notFounderHandler } from "./middleware/errors";


const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.json())

app.use(loggerMiddleware);


app.use("/authors", router)
app.use("/books", bookRouter)

app.use(notFounderHandler)

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})