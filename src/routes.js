const express = require('express');

const ProductController = require('./controllers/ProductController');
const SellerController = require('./controllers/SellerController');
const ClientController = require('./controllers/ClientController');
const PedidoController = require('./controllers/PedidosController');

const routes = express.Router();

// ROTAS DE PRODUTO

routes.get('/products', ProductController.getAllProducts);
routes.get('/products/:id', ProductController.getProductById);
routes.post('/products', ProductController.createProduct);
routes.delete('/products/:id', ProductController.deleteProduct);
routes.put('/products/:id', ProductController.updateProductById);


// ROTAS DO LOJISTA - SELLER

routes.get('/sellers', SellerController.getAllSellers);
routes.get('/sellers/:id', SellerController.getSellerById);
routes.post('/sellers', SellerController.createSeller);
routes.delete('/sellers/:id', SellerController.deleteSeller);
routes.put('/sellers/:id', SellerController.updateSellerById);

// ROTAS DO CLIENTE 

routes.post('/clients', ClientController.createClient);
routes.get('/sellers', ClientController.getAllClients);
routes.get('/sellers/:id', ClientController.getClientById);
routes.delete('/sellers/:id', ClientController.deleteClient);
routes.put('/sellers/:id', ClientController.updateClientById);

// ROTAS DE PEDIDOS

routes.post('/pedido', PedidoController.createPedido);
routes.get('/pedido', PedidoController.getAllPedidos);
routes.get('/pedido/:id', PedidoController.getPedidoById);
routes.delete('/pedido/:id', PedidoController.deletePedido);
routes.put('/pedido/:id', PedidoController.updatePedidoById);


module.exports = routes;