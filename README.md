# LIBRARY API

<img src="https://socialify.git.ci/ntombizodwantlahla53-code/Library-API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Library-API" width="640" height="320" />

# Project Description
```The Library API is a RESTful API built with TypeScript and Express.js for managing authors and books in a local community library system. The API allows librarians to create, view, update, and delete authors and books. Each book is connected to an author using an authorId. The API also includes input validation, duplicate book detection, logging, and error handling. The API uses in-memory arrays to store authors and books.
```
# Installation and Set-up
```bash
Clone the repository:
git clone https://github.com/ntombizodwantlahla53-code/Library-API.git
cd Library-API
```

# Run 
npm run dev

# Tech Stack
```
## 1. Typecript
## 2. Node.js
## 3. Express
## 4. Express Validator
## 5.Postman
```
# End Points
## 1. Authors

GET /v1/authors - List all authors
POST /v1/authors - Create a new author
GET /v1/authors/:id - Get an author by ID
PUT /v1/authors/:id - Update an author
DELETE /v1/authors/:id - Delete an author
GET /v1/authors/:id/books - List books by an author

## 2. Books
GET /v1/books - List all books
POST /v1/books - Create a new book
GET /v1/books/:id - Get a book by ID
PUT /v1/books/:id - Update a book
DELETE /v1/books/:id - Delete a book

# Validation and Error Handling
400 Bad Request-Invalid input data
404 Not Found -Author, book or route not found
409 Conflict -Duplicate book