import { Request, Response } from "express";
import { Author } from "../Models/authorsmodel";
import { books } from "./books";

export const authors: Author[] = [];

export const getAllAuthors = (req: Request, res: Response) => {
  res.status(200).json(authors);
};

export const getAuthorById = (req: Request, res: Response) => {
  const { id } = req.params;
  const author = authors.find((author) => author.id === Number(id));

  if (!author) {
    return res.status(404).send("user not found");
  }

  res.status(200).json(author);
};

export const createAuthor = (req: Request, res: Response) => {
  const { name, surname } = req.body;
  const newAuthor: Author = { id: authors.length + 1, name, surname };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

export const BookByAuthorId = (req: Request, res: Response) => {
  const { id } = req.params;
  const authorBooks = books.filter(
    (book) => book.authorId === parseInt(String(id)),
  );

  if (!authorBooks) {
    return res.status(404).json({ message: "Author not found" });
  }
  res.status(200).json(authorBooks);
};

export const deleteAuthor = (req: Request, res: Response) => {
  const { id } = req.params;
  const authorIndex = authors.findIndex((author) => author.id === Number(id));
  if (authorIndex === -1) {
    return res.status(404).send("Author not found");
  }
  const deletedAuthor = authors.splice(authorIndex, 1);
  res.status(200).json(deletedAuthor[0]);
};

export const updateAuthor = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, surname } = req.body;
  const author = authors.find((author) => author.id === Number(id));
  if (!author) {
    return res.status(404).send("Author not found");
  }
  author.name = name;
  author.surname = surname;

  res.status(200).json(author);
};