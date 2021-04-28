const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class Products extends Model {
    static init(sequelize) {
        super.init({
            uuid: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4(),
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL(10, 2),
            quantity: DataTypes.INTEGER,
            deletedAt: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Products;