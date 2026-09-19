import { Request, Response } from "express";
import { Book } from "../Models/booksmodel";
import { authors } from "./authors";

export const books: Book[] = [];

export const getAllBooks = (req: Request, res: Response) =>{
    res.status(200).json(books);
};

export const createBook = (req: Request, res: Response) =>{
    const{ title, year, authorId } = req.body;

    const author = authors.find(
        (author) => author.id === Number(authorId)
    );
    if(!author){
        return res.status(404).send("Author not found");
    }
    const newBook: Book ={id: books.length + 1, title, year, authorId: Number(authorId)};
    books.push(newBook);

    res.status(201).json(newBook);
};