class ReturnRepository{

    constructor(connection){
        this.connection = connection;
    }

    async store(data){
        let result;
    
        let dataReturn = await this.connection.query("SELECT COUNT(code) as count FROM book_return WHERE code=?", [data.code]);
      
        if(dataReturn[0][0].count > 0){
            result= {
                success: false,
                message: 'Sorry, the book you borrowed has been returned'
            }
        }else{
            let row = await this.isExistLoan(data);

            if(row.length > 0){
                let dataLoan = await this.isExistLoan(data);
              
                if(dataLoan.length > 1){
                    
                    await this.connection.query("INSERT INTO book_return(code, loan_id, return_date, book_condition) VALUES(?,?,?,?)", [data.code, data.loanId, data.returnDate, data.bookCondition]);
                    await this.updateStatusLoan(data);
                    result = {
                        success: true,
                        message: 'The book was successfully returned'
                    }
                   
                    
                }else{
                    result = {
                        success: false,
                        message: 'The books returned are books lent by members'
                    }
                }
              
                
            }else{
                result = {
                    success: false,
                    message: 'The books returned are books lent by members'
                }
            }
        }
        

        return result;
    }

    async isExistLoan(data){
        let result = await this.connection.query("SELECT * FROM loan WHERE code =? AND loan_status =?", [data.loanId, 'Aktif']);
        return result;
    }

    async updateStatusLoan(data){
        await this.connection.query("UPDATE loan SET loan_status =? WHERE code", ['Kembali', data.loanId]);
    }
}

module.exports = ReturnRepository