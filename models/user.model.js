module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                // len: {
                // args: [8,20],
                //     msg: 'Password must be between 8-20 characters in length.'
                // }
            }
        },
        role: {
            type: DataTypes.ENUM(
                'Lead Instructor', 'Instructor', 'Learning Assistant', 'other...', 'Admin'
            ),
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            validate: {
                isUUID: 4
            }
        }
    })
    return User;
}