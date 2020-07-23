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
                min: 8
                // len: [8, 20]
            }
        },
        role: {
            type: DataTypes.ENUM(
                'Lead Instructor', 'Instructor', 'Learning Assistant', 'other...'
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