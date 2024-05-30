class MemberService {
    constructor(memberRepository){
        this.memberRepository = memberRepository;
    }

    async getAllMembers(){
        return await this.memberRepository.getAll();
    }

    async getMemberById(code){
        return await this.memberRepository.getById(code);
    }

    async createMember(member){
        await this.memberRepository.create(member);
    }

    async updateMember(code, member){
        await this.memberRepository.update(code, member);
    }

    async deleteMember(code){
        await this.memberRepository.delete(code);
    }
}

module.exports = MemberService