const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('departamento', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        
        codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true,
        updatedAt: false,
        createdAt: false,
    });
};