const router = require('express').Router();
const Classroom = require('../db').import('../models/classroom.model')

//* GET ALL
router.get('/', (req, res) => {
    Classroom.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({
            error: err,
            msg: 'GET ALL route'
        }))
})

//* POST
router.put('/', (req, res) => {
    
    const inputClassroom = {
        class: req.body.class,
        cohort: req.body.cohort,
        numStudents: req.body.numStudents
    }
    
    Classroom.create(inputClassroom)
        .then(cohort => res.status(200).json(cohort))
        // .then(cohort => res.status(200).json({Classroom: cohort}))
        .catch(err => res.status(500).json({ 
            error: err, 
            msg: 'PUT error'
        }))
})

//* GET BY : -- WHAT?

//* UPDATE :id
router.put('/:id', (req, res) => {
    Classroom.update(req.body, {
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
    Classroom.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(cohort => res.status(200).json({
        classroom: cohort,
        msg: 'Student Deleted!'
    }))
    .catch(err => res.status(500).json({
        error: err,
        msg: 'Delete Route'
    }))
})

module.exports = router;
