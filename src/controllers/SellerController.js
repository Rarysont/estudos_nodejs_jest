const moment = require('moment');
const Sellers = require('../models/Seller');

module.exports = {
    async getAllSellers(req, res) {
        const seller = await Sellers.findAll({
            where: {
                deletedAt: null,
            },
        });

        return res.json(seller);
    },

    async createSeller(req, res) {
        const sellerResponse = await Sellers.create(req.body);
        return res.json(sellerResponse);
    },

    async getSellerById(req, res) {
        const { id } = req.params;

        const seller = await Sellers.findByPk(id);

        if (!seller) {
            return res.status(400).json({ error: 'Seller not found!' });
        }

        return res.json(seller);
    },
    async updateSellerById(req, res) {
        const { id } = req.params;
        const seller = req.body;

        const selectSeller = await Sellers.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!selectSeller) {
            return res.status(400).json({ error: 'Seller not found!' });
        }

        await Sellers.update(seller, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    },

    async deleteSeller(req, res) {
        const { id } = req.params;

        const seller = await Sellers.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!seller) {
            return res.status(400).json({ error: 'Seller not found!' });
        }

        const updateDeletedAt = moment().format();

        await Sellers.update({
            deletedAt: updateDeletedAt,
        }, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    }
};