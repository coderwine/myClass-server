module.exports (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {

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
        alumn: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,  
        },
        id: {
            type: DataTypes.UUIDV4,
            primeKey: true,
            validate: {
                isUUID: 4
            }
        }
        // May need to add a way to note which cohort they were in if alumn is "true"

    })
    return Student;
}