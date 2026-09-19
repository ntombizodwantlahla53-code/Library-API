import { Request, Response } from "express";
import { Book } from "../Models/booksmodel";
import { authors } from "./authors";

export const books: Book[] = [];

export const getAllBooks = (req: Request, res: Response) =>{
    res.status(200).json(books);
};

export const getBookById = (req: Request, res: Response) =>{
    const{ id } = req.params;
    const book = books.find(
        (book) => book.id === Number(id)
    );
    if(!book){
        return res.status(404).send("book not found");
    }

    res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) =>{
    const{ title, year, authorId } = req.body;

    const author = authors.find(
        (author) => author.id === Number(authorId)
    );
    if(!author){
        return res.status(404).send("author iz not found");
    }

const duplicateBook = books.find(
    (book) =>
        book.title.toLowerCase() === title.toLowerCase()&& book.year === Number(year) && book.authorId === Number(authorId)
);
   if(duplicateBook){
    return res.status(409).json({error: "Conflict", message: "A book with the same title,sameyear and author already exists"
    });
    }

const newBook: Book ={id: books.length + 1, title, year, authorId: Number(authorId)};
    books.push(newBook);

    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) =>{
    const { id } = req.params;
    const { title, year, authorId} = req.body;

    const book = books.find(
        (book) => book.id === Number(id)
    );
    if (!book){
        return res.status(404).send("Book isnot found");
    }
    const author = authors.find(
        (author) => author.id === Number(authorId)
    );
    if(!author){
        return res.status(404).send("author is not found");
    }
    book.title=title;
    book.year =year;
    book.authorId =Number(authorId);

    res.status(200).json(book);
};

export const deleteBook = (req: Request, res: Response) =>{
    const{ id } = req.params;
    const bookIndex = books.findIndex(
        (book) => book.id === Number(id)
    );
 if(bookIndex === -1){
        return res.status(404).send("Book not found");
    }
    const deletedBook = books.splice(bookIndex, 1);

    res.status(200).json(deletedBook[0]);
};