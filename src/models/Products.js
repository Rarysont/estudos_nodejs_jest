const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class Products extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4(),
            },
            id_seller: DataTypes.STRING,
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