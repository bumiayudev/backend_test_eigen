const BookRepository = require('../repository/BookRepository');
const BookService = require('../services/BookService');

const connection = require('../config/db');
const Book = require('../models/Book');
const bookRepository = new BookRepository(connection);
const bookService = new BookService(bookRepository);

const bookController = {
    getAllBooks : async(req, res) => {
        const books = await bookService.getAllBooks();
        // console.log(books)
        res.status(200).json({books: books});
    },
    getBookById : async(req, res) => {
        const code = req.params.code;
        const [result] = await bookService.getBookById(code);
        res.status(200).json({book:result[0]});
    },
    createBook : async(req, res)=> {
        const { code, title, author, stock} = req.body;
        const book = new Book(code, title, author, stock);
         await bookService.createBook(book);
        res.status(201).json({message: 'New book has been successfully created'});
    },
    updateBook: async(req, res)=> {
        const {code} = req.params;
        const {bookId, title, author, stock} = req.body;
        const book = new Book(bookId, title, author, stock);
        await bookService.updateBook(code, book);
        res.status(200).json({message: 'The book has been successfully updated'});
    },
    deleteBook : async(req, res)=>{
        const code = req.params.code;
        await bookService.deleteBook(code);
        res.status(200).json({message: 'The book has been successfully deleted'})
    }
}

module.exports = bookController;