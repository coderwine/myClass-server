const router = require('express').Router();
const Student = require('../db').import('../models/student.model');
const validateSession = require('../middleware/validate-session');

//* GET ALL STUDENTS
router.get('/student', (req, res) => {
    Student.findAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        error: err,
        msg: 'GET ALL Students Failed'
    }))
});

//* POST STUDENT
router.post('/student', validateSession, (req, res) => {

    const inputStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studentEmail: req.body.studentEmail,
        badge: req.body.badge,
        alumn: req.body.alumn,
    }

    Student.create(inputStudent)
        .then(student => res.status(200).json(student))
        .catch(err => res.status(500).json({
            error: err,
            msg: 'Student Create'
        }))
})



module.exports = router;