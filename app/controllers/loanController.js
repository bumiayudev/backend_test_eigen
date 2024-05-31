const LoanRepository = require('../repository/LoanRepository');
const LoanService = require('../services/LoanService');
const conn = require('../config/db');
const Loan = require('../models/Loan');

const loanRepository = new LoanRepository(conn);
const loanService = new LoanService(loanRepository);

const LoanController = {

    savedLoanBook : async(req, res)=>{
        
        let { code, memberId, bookId, loanDate, dueDate } = req.body;
        let data = new Loan(code, memberId, bookId, loanDate, dueDate);
        let result = await loanService.savedLoanBook(data);
      
        // cek kondisi jika data sudah benar
        if(result.success == 'true'){
            res.status(201).json({message: result.message});
        } else {
            res.status(400).json({message: result.message});
        }
    }
}

module.exports = LoanController;