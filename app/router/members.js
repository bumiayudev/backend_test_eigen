const express = require('express');
const router = express.Router();
const {
    getAllMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
} = require('../controllers/memberController');


/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: list of members
 *     description: list of member from database.
 *     responses:
 *       200:
 *         description: list members.
 *         content:
 *           application/json:
 *             members:
 *               type:object
 */

router.get('/members', getAllMembers);

/**
 * @swagger
 * /api/members/{code}:
 *   get:
 *     summary: Retrieve a single member by Member ID
 *     description: Retrieve a member by ID from database.
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *     responses:
 *       '200':
 *         description: A member.
 *         content:
 *           application/json:
 *             member:
 *               type:object
 */

router.get('/members/:code', getMemberById);

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: create a new member
 *     description: create a new member.
 *     requestBody:
 *          description: the field input
 *          content: 
 *              application/json:
 *                  member:
 *                      type: object
 *                  properties:
 *                      code:
 *                        type:string
 *                      name:
 *                        type:string
 *                  required:
 *                      - code
 *                      - name
 *                  examples:
 *                      member:
 *                        summary: an example member
 *                        value:
 *                          code: MB43467
 *                          name: Budiman
 *     responses:
 *       200:
 *         description: A member.
 *         content:
 *           application/json:
 *             message:
 *               type:string
 */

router.post('/members', createMember);
router.patch('/members/:code', updateMember);
router.delete('/members/:code', deleteMember);

module.exports = router;