class Loan {
    constructor(code, memberId, bookId, loanDate, dueDate){
        this.code = code;
        this.memberId = memberId;
        this.bookId = bookId;
        this.loanDate = loanDate;
        this.dueDate = dueDate;
    }
}

module.exports = Loan;