const moment = require('moment');
const Product = require('../models/Products');
const Seller = require('../models/Seller');


module.exports = {
  async createProduct(req, res) {
    const sellerId = req.body.id_seller;
    const seller = await Seller.findOne({
      where: {
        id: sellerId,
        deletedAt: null,
      }
    });

    if (!seller) {
      return res.status(400).json({ error: 'Seller not found!' });
    }

    const products = await Product.create(req.body);
    return res.json(products);
  },

  async getAllProducts(req, res) {
    const products = await Product.findAll({
      where: {
        deletedAt: null,
      },
    });

    return res.json(products);
  },

  async getProductById(req, res) {
    const { id } = req.params;

    const products = await Product.findByPk(id);

    if (!products) {
      return res.status(400).json({ error: 'Product not found!' });
    }

    return res.json(products);
  },
  async updateProductById(req, res) {
    const { id } = req.params;
    const product = req.body;
    const products = await Product.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (product.id_seller !== products.id_seller) {
      return res.status(400).json({ error: 'Different sellers!' });
    }

    if (!products) {
      return res.status(400).json({ error: 'Product not found!' });
    }

    await Product.update(product, {
      where: {
        id,
      }
    });

    return res.status(200).json('Sucess');
  },

  async deleteProduct(req, res) {
    const { id } = req.params;

    const products = await Product.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!products) {
      return res.status(400).json({ error: 'Product not found!' });
    }

    const updateDeletedAt = moment().format();

    await Product.update({
      deletedAt: updateDeletedAt,
    }, {
      where: {
        id,
      }
    });

    return res.status(200).json('Sucess');
  }
};