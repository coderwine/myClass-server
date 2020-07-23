const router = require('express').Router();
const User = require('../db').import('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    res.send('User Test Connection')
})

//*SIGNUP
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 13),
        role: req.body.role
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign(
                {id: user.id},
                process.env.JWT,
                {expiresIn: 60*60*12}
                ) 
                res.json({
                    user: user,
                    msg: 'User Created',
                    sessionToken: token
                })
        },
        createError = err => res.send(500, err)
    )
    .catch(err => res.status(500).json({ error: err }))
})

//* LOGIN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign(
                        {id: user.id},
                        process.env.JWT,
                        {expiresIn: 60*60*12}
                        )
                        res.json({
                            user: user,
                            msg: `${req.body.email} successfully logged in!`,
                            sessionToken: token
                        })
                } else {
                    res.status(502).send({error: 'bad gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'failed to authenticate'})
        }
    }, err => res.status(501).send({error: 'failed to process'}))
})

module.exports = router;