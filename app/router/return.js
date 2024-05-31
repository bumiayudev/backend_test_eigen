const express = require('express');
const router = express.Router();
const { savedReturnBook } = require('../controllers/returnController');

/**
 * @swagger
 * /api/return:
 *   post:
 *     summary: save return book
 *     description: save return book
 *     requestBody:
 *          description: the field input
 *          content: 
 *              application/json:
 *                  return:
 *                      type: object
 *                  properties:
 *                      code:
 *                        type:string
 *                      loanId:
 *                        type:string
 *                      returnDate:
 *                        type: date
*                      bookCondition:
 *                        type:string
 *                  required:
 *                      - code
 *                      - loanId
 *                      - returnDate
 *                      - bookCondition
 *                  examples:
 *                      return book:
 *                        summary: an example return book
 *                        value:
 *                          code: RN20240608
 *                          loanId: PJM3105243
 *                          returnDate: 2024-06-08
 *                          bookCondition: Baik
 *     responses:
 *       200:
 *         description: save return book.
 *         content:
 *           application/json:
 *             message:
 *               type:string
 */

router.post('/return', savedReturnBook);

module.exports = router;