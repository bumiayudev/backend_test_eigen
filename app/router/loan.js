const express = require('express');
const router = express.Router();
const { savedLoanBook, getAllLoan } = require('../controllers/loanController');

/**
 * @swagger
 * /api/loan:
 *   post:
 *     summary: create a new loan book
 *     description: create a new loan book.
 *     requestBody:
 *          description: the field input
 *          content: 
 *              application/json:
 *                  loan:
 *                      type: object
 *                  properties:
 *                      code:
 *                        type:string
 *                      memberId:
 *                        type:string
 *                      bookId:
 *                        type:string
 *                      loanDate:
 *                        type: date
 *                      dueDate:
 *                        type: date
 *                  required:
 *                      - code
 *                      - memberId
 *                      - bookId
 *                      - loanDate
 *                      - dueDate
 *                  examples:
 *                      loan book:
 *                        summary: an example loan book
 *                        value:
 *                          code: PJM3105241
 *                          memberId: MB120524
 *                          bookId: BK2024
 *                          loanDate: 2024-05-31
 *                          dueDate: 2024-06-7
 *     responses:
 *       200:
 *         description: Create A new loan book.
 *         content:
 *           application/json:
 *             message:
 *               type:string
 */

router.post('/loan', savedLoanBook);

/**
 * @swagger
 * /api/loan:
 *   get:
 *     summary: list of loan book
 *     description: list of loan book.
 *     responses:
 *       200:
 *         description: list of loan book.
 *         content:
 *           application/json:
 *              data:
 *                  type: object
 *                  properties:
 *                      loanId:
 *                          type: string
 *                      loanDate:
 *                          type: date
 *                      dueDate:
 *                          type: date
 *                      memberName:
 *                          type: string
 *                      bookTitle:
 *                          type: string
 *                      status:
 *                          type: string
 */

router.get('/loan', getAllLoan);

module.exports = router;