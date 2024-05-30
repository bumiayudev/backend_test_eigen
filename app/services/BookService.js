class BookService{
    constructor(bookRepository){
        this.bookRepository = bookRepository
    }

    async getAllBooks(){
        return await this.bookRepository.getAll();
    }

    async getBookById(code){
        return await this.bookRepository.getById(code);
    }

    async createBook(book){
        await this.bookRepository.create(book);
    }

    async updateBook(code, book){
        await this.bookRepository.update(code, book);
    }

    async deleteBook(code){
        await this.bookRepository.delete(code);
    }
}

module.exports = BookService;