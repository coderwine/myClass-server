module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studentEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        badge: {
            type: DataTypes.ENUM(
                'White', 'Gold', 'Blue', 'Red'
            ),
            allowNull: false,  
        },
        alumn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            // allowNull: false,  
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            validate: {
                isUUID: 4
            }
        }
        // May need to add a way to note which cohort they were in if alumn is "true"

    })
    return Student;
}