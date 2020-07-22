const router = require('express').Router();
const Student = require('../db').import('../models/classroom.model')

//* GET ALL
router.get('/', (req, res) => {
    Student.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            error: err,
            msg: 'GET ALL route'
        }))
})

//* POST
router.put('/', (req, res) => {
    
    const inputStudent = {
        class: req.body.class,
        cohort: req.body.cohort,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        badge: req.body.badge,
        notes: req.body.notes
    }
    
    Student.create(inputStudent)
        .then(cohort => res.status(200).json(cohort))
        // .then(cohort => res.status(200).json({student: cohort}))
        .catch(err => res.status(500).json({ 
            error: err, 
            msg: 'PUT error'
        }))
})

//* GET BY : -- WHAT?

//* UPDATE :id
router.put('/:id', (req, res) => {
    Student.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(cohort => res.status(200).json(cohort))
    .catch(err => res.status(500).json({
        error: err,
        msg: 'Update by ID'
    }))
})

//* DELETE :id
router.delete('/:id', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(cohort => res.status(200).json({
        student: cohort,
        msg: 'Student Deleted!'
    }))
    .catch(err => res.status(500).json({
        error: err,
        msg: 'Delete Route'
    }))
})

module.exports = router;
