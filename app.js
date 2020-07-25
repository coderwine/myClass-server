require('dotenv').config();

const express = require('express');
const app = express();

//* CONTROLLERS 
const classroom = require('./controllers/classroom.controller');
const user = require('./controllers/user.controller');
const student = require('./controllers/student.controller');

//* DB
const sequelize = require('./db');
sequelize.sync()
// sequelize.sync({ force: true })  // for dropping tables

app.use(express.json());
app.use(require('./middleware/headers'))

//* ROUTES
app.use('/', user)
app.use('/', student) 
app.use(require('./middleware/validate-session'))
app.use('/classroom', classroom);


//* LISTENING 
app.listen(process.env.PORT, () => {
    console.log(`************${process.env.NAME} app is listening on ${process.env.PORT}************`)
})