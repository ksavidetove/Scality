var express = require('express');
var router = express.Router();
const bookService = require('../services/books.js');

// GET Fetch all books
router.get('/', (req, res) => {
  const books = bookService.getBooks();
  res.json(books);
})

// GET Fetch a single book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = bookService.getBook(id);
  
  if (book === undefined) {
    const message = `bookId ${id} was not found`
    console.error(message)
    return res.status(404).json({error: message});
  }

  res.json(book);
})

// POST Add a new book
router.post('/', (req, res) => {
  const book = bookService.addBook(req.query);

  res.json(book);
})

// PUT Update an existing book
router.put('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const book = bookService.updateBook(id, req.query);
    
    res.json(book);
  } catch (error) {
    console.error(error.stack);
    res.status(404).json({error: error.message});
  }
})

// DELETE Delete a book
router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    bookService.deleteBook(id);
    
    res.json();
  } catch (error) {
    console.error(error.stack);
    res.status(404).json({error: error.message});
  }
})

module.exports = router;
