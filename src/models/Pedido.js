const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: () => uuidv4(),
            },
            id_product: DataTypes.STRING,
            id_seller: DataTypes.STRING,
            id_client: DataTypes.STRING,
            accept: DataTypes.BOOLEAN,
            value: DataTypes.DECIMAL(10, 2),
            description: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Pedido;