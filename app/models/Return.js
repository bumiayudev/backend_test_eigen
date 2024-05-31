class ReturnBook{
    
    constructor(code, loanId, returnDate, bookCondition){
        this.code = code;
        this.loanId = loanId;
        this.returnDate = returnDate;
        this.bookCondition = bookCondition;
    }
}

module.exports = ReturnBook;