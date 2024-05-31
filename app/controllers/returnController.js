const conn = require('../config/db');
const ReturnBook = require('../models/Return');
const ReturnRepository = require('../repository/ReturnRepository');
const ReturnService = require('../services/ReturnService');
const returnRepository = new ReturnRepository(conn);
const returnService = new ReturnService(returnRepository);

const returnController = {
    savedReturnBook: async(req, res)=>{
        const { code, loanId, returnDate, bookCondition} = req.body;
        let data = new ReturnBook(code, loanId, returnDate, bookCondition);
        let result = await returnRepository.store(data);

        // cek jika kondisi data sudah benar

        if(result.success == 'true'){
            res.status(200).json({message: result.message});
        }else{
            res.status(400).json({message: result.message});
        }
    }
}

module.exports = returnController;