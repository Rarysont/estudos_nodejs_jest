const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class Seller extends Model {
    static init(sequelize) {
        super.init({
            uuid: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4(),
            },
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            store: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Seller;