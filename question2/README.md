# QUESTION 2

A simple local REST API designed to manage a collection of books

## Installation

Clone the repo and install the dependencies.

```bash
npm install
```

## Usage

```bash
npm run start
```

The REST API to the example app is described below.

### Get list of Books

`GET http://localhost:3000/api/books`

curl -i -H 'Accept: application/json' http://localhost:3000/api/books/

### Get a single Book by ID

`GET http://localhost:3000/api/books/:id`

curl -i -H 'Accept: application/json' http://localhost:3000/api/books/1

### Add a new book

`POST /api/books`

curl -i -H 'Accept: application/json' -d 'id=42&title=bonjour&author=tristesse&publicationYear=2024' http://localhost:3000/api/books

### Update an existing book

`PUT http://localhost:3000/api/books/:id`

curl -i -H 'Accept: application/json' -d 'id=2&title=bonjour&author=tristesse&publicationYear=2024' -X PUT http://localhost:3000/api/books/1


### Delete a book

`DELETE http://localhost:3000/api/books/:id`

curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/api/books/3