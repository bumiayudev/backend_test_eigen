const Book = require("../models/Book");

class BookRepository {

    constructor(connection){
        this.connection = connection;
    }

     async getAll() {
        const query = "SELECT * FROM books";
        const [results]= await this.connection.query(query);
        return results;
       
     }

     async getById(code){
        const query = "SELECT * FROM books WHERE code = ?";
        const book = await this.connection.query(query, [code]);
        return book;
       
     }

     async create(book){
        const query = "INSERT INTO books(code,title,author,stock) VALUES(?,?,?,?)";
        await this.connection.query(query, [book.code, book.title, book.author, book.stock]);
     }

     async update(code, book){
        const query = "UPDATE books SET code = ?, title = ?, author = ?,  stock = ? WHERE code = ?";
        await this.connection.query(query, [book.bookId, book.title, book.author, book.stock, code]);
     }

     async delete(code){
        await this.connection.query("DELETE FROM books WHERE code = ?", [code]);
     }
}

module.exports = BookRepository;