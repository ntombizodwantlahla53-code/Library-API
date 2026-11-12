# LIBRARY API

<img src="https://socialify.git.ci/ntombizodwantlahla53-code/Library-API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Library-API" width="640" height="320" />

## Project Overview

The Library API is a RESTful API built using TypeScript and Express.js. It allows a local community library to manage authors and books.
Each book belongs to an author through the `authorId` field. The API supports creating, viewing, updating and deleting authors and books.

## Features
- Create, view, update and delete authors.
- Create, view, update and delete books.
- Retrieve books belonging to a specific author.
- Validate request data using express-validator.
- Check that an author exists before adding a book.
- Prevent duplicate books when creating a new book.
- Handle errors and invalid requests.
- Log incoming HTTP requests using custom middleware.

## Technologies Used
- Node.js
- TypeScript
- Express.js
- express-validator
- Nodemon
- ts-node
- tsx

## Project Structure
```text
Library-API/
│
├── src/
│   ├── controllers/
│   │   ├── authors.ts
│   │   └── books.ts
│   │
│   ├── middleware/
│   │   ├── errors.ts
│   │   └── logger.ts
│   │
│   ├── Models/
│   │   ├── authorsmodel.ts
│   │   └── booksmodel.ts
│   │
│   ├── routes/
│   │   ├── author.ts
│   │   ├── book.ts
│   │   └── user.ts
│   │
│   └── server.ts
│
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Installation and Setup
### 1. Clone the repository
```bash
git clone https://github.com/ntombizodwantlahla53-code/Library-API.git
```
### 2. Navigate to the project folder
```bash
cd Library-API
```

### 3. Install dependencies
```bash
npm install
```
### 4. Start the development server
```bash
npm run dev
```

The server will run at:
```text
http://localhost:3000
```

**Understanding IDs in the endpoints**
>>When you see a number such as maybe 1 or any number in endpoint, it represents the ID of a particular resource.
For example:

- `/authors/1`-`1` represents the ID of the author.
- `/books/1`-`1` represents the ID of the book.
- `/authors/1/books`-`1` represents the ID of the author whose books you want to retrieve.

>the number is an example. Replace it with the actual ID of the author or book you want to access that is available not number that is not there or not id number that does not exist there.

### 1. Author Endpoints
| Method | Endpoint           | Description                                 |
|--------|--------------------|---------------------------------------------|
| GET    | `/authors`         | Retrieve all authors                        |
| GET    | `/authors/1`       | Retrieve the author with ID 1               |
| GET    | `/authors/1/books` | Retrieve all books belonging to author ID 1 |
| POST   | `/authors`         | Add a new author                            |
| PUT    | `/authors/1`       | Update the author with ID 1                 |
| DELETE | `/authors/1`       | Delete the author with ID 1                 |

#### GET -Retrieve all authors
```http
GET http://localhost:3000/authors
```
>This endpoint is getting all my authors.

#### GET- Retrieve an author by ID
```http
GET http://localhost:3000/authors/1
```

>The number represents the ID of the author that I want to retrieve.

#### GET – Retrieve books by author ID
```http
GET http://localhost:3000/authors/1/books
```

>The number represents the author's ID.This endpoint gets the books of that author number 1 or number i put.

#### POST – Add a new author
```http
POST http://localhost:3000/authors
{
  "name": "Ncumoluhle",
  "surname": "Ntlahla"
}
```
>This endpoint creates a new author which in Ncumoluhle Ntlahla.

#### PUT – Update an author
```http
PUT http://localhost:3000/authors/1

{
  "name": "Ntombi",
  "surname": "Ntloko"
}
```

>>The number which is 1 represents the ID of the author being updated, so Ncumoluhle Ntlahla will be updated.

#### DELETE – Delete an author
```http
DELETE http://localhost:3000/authors/1
```

>The number that is 1 represents the ID of the author being deleted.

### 2. Book Endpoints

| Method | Endpoint   | Description                 |
|--------|------------|-----------------------------|
| GET    | `/books`   | getting all books           |
| GET    | `/books/1` | get the book with id 1      |
| POST   | `/books`   | Add a new book              |
| PUT    | `/books/1` | Update the book with ID 1   |
| DELETE | `/books/1` | Delete the book with ID 1   |

#### GET- Retrieve all books
```http
GET http://localhost:3000/books
```
>>This endpoint gets all books in the library.

#### GET- Retrieve a book by ID
```http
GET http://localhost:3000/books/1
```
>>The number represents the ID of the book I want to get.

#### POST – Add a new book
```http
POST http://localhost:3000/books
{
  "title": "Hamba Nam Ndipheleke",
  "year": 1900,
  "authorId": 1
}
```
>>This endpoint creates a new book.

- `title`- The title of the book.
- `year`- The year the book was published.
- `authorId`- The ID of the author who wrote the book.
In this example,`authorId:1` means the book belongs to the author whose id is 1. That author must exist before the book can be added.

#### PUT – Update a book
```http
PUT http://localhost:3000/books/1
{
  "title": "Ityala LaWele",
  "year": 1800,
  "authorId": 1
}
```

>>The number `1` in the URL represents the ID of the book being updated.
>>The`authorId` in the request body represents the Id of the author who wrote the book.

#### DELETE-Delete a book
```http
DELETE http://localhost:3000/books/1
```
The number represents the Id of the book being deleted.

### Author Validation

- Name is required.
- Surname is required.

### Book Validation

- Title is required.
- Year must be an integer.
- Author Id must be an integer.
- The referenced author must exist.

## Error Handling

The API uses HTTP status codes to indicate the result of requests.

| Status Code | Description                           |
|-------------|---------------------------------------|
| 200         | Request completed successfully        |
| 201         | Resource created successfully         |
| 400         | Invalid request data                  |
| 404         | Requested resource or route not found |
| 409         | Duplicate book detected               |
| 500         | Internal server error                 |

## Middleware
### Logger Middleware
The logger middleware records information about incoming requests, including:
- Date and time.
- HTTP method.
- Request URL.

### Validation Middleware
>The API uses`express-validator`to check request data before processing requests.

### Error Handling Middleware
The API includes a not-found handler that returns a 404 response when a requested route does not exist.

## Testing the API
The API can be tested using Postman.

1. Start the server using `npm run dev`.
2. Open Postman.
3. Enter the endpoint URL.
4. Select the correct HTTP method (GET, POST, PUT or DELETE).
5. For POST and PUT requests, select **Body**, then **raw** and then choose **JSON**.
6. Enter the required JSON data.
7. Click **Send** to test the request.
8. Check the response and status code.

## Data Storage
>The current application stores authors and books in arrays in memory.
>This means that the data is temporary and will reset when the server restarts.

## Conclusion
The Library API provides basic CRUD functionality for managing authors and books. It demonstrates how to build a RESTful API using TypeScript and Express.js, including routing, controllers, request validation, middleware and error handling.