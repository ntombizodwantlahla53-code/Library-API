import { Router, Request, Response } from "express";
import { body,param, validationResult } from "express-validator";
import { getAllBooks,getBookById, createBook } from "../controllers/books";

export const bookRouter = Router();

bookRouter.get("/", getAllBooks);

bookRouter.get(
    "/:id",
    [param("id").isInt().withMessage("ID must be an integer")],
    (req: Request, res: Response) =>{
        const errors = validationResult(req);
if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        getBookById(req,res);
    }
);

bookRouter.post(
    "/",
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("year").isInt().withMessage("year must be an integer"),
        body("authorId").isInt().withMessage("AuthorId must be an integer"),
    ],
    (req: Request, res: Response) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        createBook(req,res);
    }
);