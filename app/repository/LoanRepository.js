class LoanRepository{

    constructor(connection){
        this.connection = connection;
    }

    async store(data){
        let result;
        let amount = await this.amountLoan(data);

        if(amount > 2){
            result = {
                message: 'Sorry, the maximum loan is only 2 books',
                success: false
            }
        }else{
            let twinBook = await this.checkTheSameBook(data);
            if(twinBook >= 1){
                result = {
                    message: "Sorry, you can't borrow the same book",
                    success: false
                }
                
            }else{
                let loanStatus = 'Aktif';
                await this.connection.query("INSERT INTO loan(code, member_id, book_id, loan_date, due_date, loan_status) VALUES(?,?,?,?,?,?)", [data.code, data.memberId, data.bookId, data.loanDate, data.dueDate, loanStatus]);
                result = {
                    message: 'The record successfully saved',
                    success: true
                }
            }
            
           
        }
    
        return result;
       
    }

    async amountLoan(data){
        let amountBook = await this.connection.query(`SELECT count(member_id)as count FROM loan WHERE loan_status = 'Aktif' AND member_id =?`, [data.memberId]);
        return amountBook[0][0].count;
    }

    async checkTheSameBook(data){
        const result = await this.connection.query("SELECT COUNT(book_id) AS count FROM loan WHERE book_id = ? AND member_id =?", [data.bookId, data.memberId]);
        return result[0][0].count; 
    }

    async getAll(){
        let sql = "SELECT l.code as loanId, l.loan_date as loanDate, l.due_date as dueDate, l.loan_status as status, m.name as memberName , b.title as bookTitle FROM loan AS l LEFT JOIN members AS m ON l.member_id = m.code LEFT JOIN books AS b ON l.book_id = b.code";
        return await this.connection.query(sql);
    }
}

module.exports = LoanRepository;