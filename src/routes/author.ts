import { Router, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";
import { getAllAuthors, getAuthorById, createAuthor } from "../controllers/authors";

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