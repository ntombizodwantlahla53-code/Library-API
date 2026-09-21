import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import {getAllAuthors,getAuthorById,createAuthor,deleteAuthor,updateAuthor,BookByAuthorId } from "../controllers/authors";

export const router = Router();

router.get("/", getAllAuthors);

router.get(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    console.log(errors, "errors from express-validator middleware");

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    getAuthorById(req, res);
  },
);

router.get(
  "/:id/books",
  [param("id").isInt().withMessage("Id must be an integar")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    console.log(errors, "There was an error");

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   BookByAuthorId(req, res);
  },
);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createAuthor(req, res);
  },
);

router.delete(
  "/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    deleteAuthor(req, res);
  },
);

router.put(
  "/:id",
  [
    param("id").isInt().withMessage("ID must be integer"),
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    updateAuthor(req, res);
  },
);

