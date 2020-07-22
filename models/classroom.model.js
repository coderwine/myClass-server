// const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('classroom', {
        
        class: {
            type: DataTypes.ENUM(
                'WD', 'SD', 'Cyber', 'Python', 'UX/UI'
            ),
            allowNull: false,
        },
        cohort: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        badge: {
            type: DataTypes.ENUM(
                'White', 'Gold', 'Blue', 'Red'
            ),
            allowNull: false,  
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    })
    return Student;
}