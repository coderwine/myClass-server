module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('notes', {

        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            validate: {
                isUUID: 4
            }
        }
    })
}