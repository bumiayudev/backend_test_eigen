class ReturnService{
    constructor(returnRepository){
        this.returnRepository = returnRepository;
    }

    async savedReturnBook(data){
        return await this.returnRepository.store(data);
    }
}

module.exports = ReturnService;