class LoanService{

    constructor(loanRepository){
        this.loanRepository = loanRepository;
    }

    async savedLoanBook(data){
       return await this.loanRepository.store(data);
    }
}

module.exports = LoanService;