module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define('classroom', {
        
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
        numStudents: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: null
            // will want to populate as students are added.
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
    return Classroom;
}