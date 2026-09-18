// import { Router, Request, Response } from "express";
// import { body, param, validationResult } from "express-validator";
// import { createUser, getAllUsers, getUserById } from "../controllers/users";

// export const router = Router();

// router.get("/", getAllUsers);

// router.get(
//   "/:id",
//   [param("id").isInt().withMessage("ID must be an integer")],
//   (req: Request, res: Response) => {
//     const errors = validationResult(req);

//     console.log(errors, "errors from express-validator middleware");

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     getUserById(req, res);
//   },
// );

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Must be a valid email address"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createUser(req, res);
  },
);