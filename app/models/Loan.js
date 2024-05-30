class Loan {
    constructor(code, member_id, book_id, loan_date, due_date){
        this.code = code;
        this.member_id = member_id;
        this.book_id = book_id;
        this.loan_date = loan_date;
        this.due_date = due_date;
    }
}

module.exports = Loan;