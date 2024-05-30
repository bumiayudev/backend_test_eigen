class BookReturn{
    constructor(code, loan_id, return_date, book_condition){
        this.code = code;
        this.loan_id = loan_id;
        this.return_date = return_date;
        this.book_condition = book_condition;
    }
}

module.exports = BookReturn;