const moment = require('moment');
const Pedido = require('../models/Pedido');
const Client = require('../models/Client');
const Product = require('../models/Products');

module.exports = {
    async createPedido(req, res) {
        const clientId = req.body.id_client;
        const data = req.body;

        if (!clientId) {
            return res.status(400).json({ error: 'Client not found!' });
        }

        const product = await Product.findOne({
            where: {
                id: data.id_product,
                deletedAt: null,
            },
        });

        const createPedido = {
            ...data,
            value: product.price,
            id_seller: product.id_seller,
        };

        console.log(data);
        console.log(createPedido);

        const pedidoResponse = await Pedido.create(createPedido);
        return res.json(pedidoResponse);
    },
    async getAllPedidos(req, res) {
        const pedidos = await Pedido.findAll({
            where: {
                deletedAt: null,
            },
        });

        return res.json(pedidos);
    },
    async getPedidoById(req, res) {
        const { id } = req.params;

        const pedidos = await Pedido.findByPk(id);

        if (!pedidos) {
            return res.status(400).json({ error: 'Pedido not found!' });
        }

        return res.json(pedidos);
    },
    async updatePedidoById(req, res) {
        const { id } = req.params;
        const pedido = req.body;

        const selectPedido = await Pedido.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!selectPedido) {
            return res.status(400).json({ error: 'Pedido not found!' });
        }

        await Pedido.update(pedido, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    },

    async deletePedido(req, res) {
        const { id } = req.params;

        const selectPedido = await Pedido.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!selectPedido) {
            return res.status(400).json({ error: 'Pedido not found!' });
        }

        const updateDeletedAt = moment().format();

        await Pedido.update({
            deletedAt: updateDeletedAt,
        }, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    }
};