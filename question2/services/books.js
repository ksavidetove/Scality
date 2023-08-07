const Book = require('../dtos/book')

const books = [{
    id: 1,
    title: 'test',
    author: 'kevin',
    publicationYear: 2022
  }, {
    id: 2,
    title: 'Harry Potter',
    author: 'test',
    publicationYear: 1754
  }];

const getBooks = () => {
    return books;
}

const getBook = (id) => {
     return books.find(book => book.id === id); 
}

const updateBook = (id, data) => {
    const bookIdx = books.findIndex(book => book.id === id);
    if (bookIdx === -1) {
        throw new Error(`bookId ${id} not found`);
    }
    
    const book = new Book(data);
    books[bookIdx] = book;

    return book;
}

const addBook = (data) => {
    const book = new Book(data);
    books.push(book);
    
    return book;
}

const deleteBook = (id) => {
    const bookIdx = books.findIndex(book => book.id === id);

    if (bookIdx === -1) {
        throw new Error(`bookId ${id} not found`);
    }

  books.splice(bookIdx, 1);
}

module.exports = {
    getBook,
    getBooks,
    addBook,
    deleteBook,
    updateBook
}

