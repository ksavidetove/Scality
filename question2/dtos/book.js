module.exports = class Book {
    id;
    title;
    author;
    publicationYear;

    constructor(data) {
        this.id = parseInt(data.id);
        this.title = data.title;
        this.author = data.author;
        this.publicationYear = parseInt(data.publicationYear);
    }
}