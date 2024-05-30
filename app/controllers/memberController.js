const MemberService = require('../services/MemberService');
const MemberRepository = require('../repository/MemberRepository');

const connection = require('../config/db');
const Member = require('../models/Member');
const memberRepository = new MemberRepository(connection);
const memberService = new MemberService(memberRepository);

const memberController = {
    getAllMembers : async(req, res) => {
        const results = await memberService.getAllMembers();
        res.status(200).json({members: results});
    },
    getMemberById : async(req, res) => {
        const code = req.params.code;
        const [result] = await memberService.getMemberById(code);
        res.status(200).json({member:result});
    },
    createMember : async(req, res) => {
        const { code, name} = req.body;
        const dataMember = new Member(code, name);
        await memberService.createMember(dataMember);
        res.status(201).json({message: 'New member successfully created'});
    },
    updateMember : async(req, res) => {
        const { code } = req.params;
        const { memberId, name} = req.body;
        const dataMember = new Member(memberId, name);
        await memberService.updateMember(code, dataMember);
        res.status(200).json({message: 'Member successfully updated'});
    },
    deleteMember : async(req, res)=> {
        const code = req.params.code;
        await memberService.deleteMember(code);
        res.status(200).json({message: 'Member data has been successfully deleted'});
    }
}

module.exports = memberController;