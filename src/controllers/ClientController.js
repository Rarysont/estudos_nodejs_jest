const moment = require('moment');
const Client = require('../models/Client');

module.exports = {
    async createClient(req, res) {
        const clientResponse = await Client.create(req.body);
        return res.json(clientResponse);
    },
    async getAllClients(req, res) {
        const client = await Client.findAll({
            where: {
                deletedAt: null,
            },
        });

        return res.json(client);
    },
    async getClientById(req, res) {
        const { id } = req.params;

        const client = await Client.findByPk(id);

        if (!client) {
            return res.status(400).json({ error: 'Client not found!' });
        }

        return res.json(client);
    },
    async updateClientById(req, res) {
        const { id } = req.params;
        const client = req.body;

        const selectClient = await Product.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!selectClient) {
            return res.status(400).json({ error: 'Client not found!' });
        }

        await Client.update(client, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    },

    async deleteClient(req, res) {
        const { id } = req.params;

        const selectClient = await Client.findOne({
            where: {
                id,
                deletedAt: null,
            },
        });

        if (!selectClient) {
            return res.status(400).json({ error: 'Client not found!' });
        }

        const updateDeletedAt = moment().format();

        await Client.update({
            deletedAt: updateDeletedAt,
        }, {
            where: {
                id,
            }
        });

        return res.status(200).json('Sucess');
    }
};