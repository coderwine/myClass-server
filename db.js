const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.NAME,
    'postgres',
    process.env.PASS, 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

sequelize.authenticate()
    .then(() => console.log(`************ ${process.env.NAME} Postgres DB is Connected ************`))
    .catch(err => console.log(`${process.env.NAME} DB error: `, err))

module.exports = sequelize;