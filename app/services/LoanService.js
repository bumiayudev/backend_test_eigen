class LoanService{

    constructor(loanRepository){
        this.loanRepository = loanRepository;
    }

    async savedLoanBook(data){
       return await this.loanRepository.store(data);
    }

    async getAllLoan(){
        return await this.loanRepository.getAll();
    }
}

module.exports = LoanService;