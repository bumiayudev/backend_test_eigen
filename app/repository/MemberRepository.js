const Member = require("../models/Member");

class MemberRepository{

    constructor(connection){
        this.connection = connection;
    }

     async getAll() {
        const query = "SELECT * FROM members";
        const [results]= await this.connection.query(query);
        return results;
       
     }

     async getById(code){
        const query = "SELECT * FROM members WHERE code = ?";
        const book = await this.connection.query(query, [code]);
        return book;
       
     }

     async create(member){
        const query = "INSERT INTO members(code, name) VALUES(?,?)";
        await this.connection.query(query, [member.code, member.name]);
     }

     async update(code, member){
        const query = "UPDATE members SET code = ?, name = ? WHERE code = ?";
        await this.connection.query(query, [member.code, member.name, code]);
     }

     async delete(code){
        await this.connection.query("DELETE FROM members WHERE code = ?", [code]);
     }
}

module.exports = MemberRepository;