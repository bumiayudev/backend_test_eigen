const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: list of books
 *     description: list of books from database.
 *     responses:
 *       200:
 *         description: list books.
 *         content:
 *           application/json:
 *             books:
 *               type:object
 */

router.get('/books', getAllBooks);

/**
 * @swagger
 * /api/books/{code}:
 *   get:
 *     summary: Retrieve a single book by book ID
 *     description: Retrieve a book by ID from database.
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *     responses:
 *       '200':
 *         description: A member.
 *         content:
 *           application/json:
 *             book:
 *               type:object
 */


router.get('/books/:code', getBookById);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: create a new book
 *     description: create a new book.
 *     requestBody:
 *          description: the field input
 *          content: 
 *              application/json:
 *                  book:
 *                      type: object
 *                  properties:
 *                      code:
 *                        type:string
 *                      title:
 *                        type:string
 *                      author:
 *                        type:string
 *                      stock:
 *                        type:integer
 *                  required:
 *                      - code
 *                      - title
 *                      - author
 *                      - stock
 *                  examples:
 *                      book:
 *                        summary: an example book
 *                        value:
 *                          code: BK0349
 *                          title: Senyumin aja
 *                          author: Bagas
 *                          stock: 10
 *     responses:
 *       200:
 *         description: A new book.
 *         content:
 *           application/json:
 *             message:
 *               type:string
 */

router.post('/books', createBook);
router.patch('/books/:code', updateBook);
router.delete('/books/:code', deleteBook);

module.exports = router;