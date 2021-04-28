const request = require("supertest");
const app = require('../server');

let responseSellerCreated;
let responseClientCreated;
let responseProductCreated;

describe("Test Sellers(Lojista)", () => {
    test("Test create seller", async () => {
        responseSellerCreated = await request(app)
            .post('/sellers')
            .send({
                name: "Raryson",
                age: 18,
                store: "RarysonStore"
            });

        expect(responseSellerCreated.statusCode).toBe(200);
    });

    test("Test get all seller", async () => {
        const response = await request(app)
            .get('/sellers');

        expect(response.statusCode).toBe(200);
    });

    test("Test get seller by id", async () => {
        const response = await request(app)
            .get(`/sellers/${responseSellerCreated.body.id}`);

        expect(response.statusCode).toBe(200);
    });

    test("Test update seller", async () => {
        const response = await request(app)
            .put(`/sellers/${responseSellerCreated.body.id}`)
            .send({
                name: "GenShop User",
                age: 25,
                store: "GenShop"
            });

        expect(response.statusCode).toBe(200);
    });

    // test("Test update seller", async () => {
    //     const response = await request(app)
    //         .delete(`/sellers/${responseSellerCreated.body.id}`);

    //     expect(response.statusCode).toBe(200);
    // });
});

describe("Test Products", () => {
    test("Test create product", async () => {
        responseProductCreated = await request(app)
            .post('/products')
            .send({
                id_seller: responseSellerCreated.body.id,
                name: "Mac Book",
                description: "Notebook",
                price: 3500.00,
                quantity: 10
            });

        expect(responseProductCreated.statusCode).toBe(200);
    });

    test("Test get all products", async () => {
        const response = await request(app)
            .get('/products');

        expect(response.statusCode).toBe(200);
    });

    test("Test get product by id", async () => {
        const response = await request(app)
            .get(`/products/${responseProductCreated.body.id}`);

        expect(response.statusCode).toBe(200);
    });

    test("Test update product", async () => {
        const response = await request(app)
            .put(`/products/${responseProductCreated.body.id}`)
            .send({
                id_seller: responseSellerCreated.body.id,
                name: "Dell Inpirion",
                description: "Notebook",
                price: 2000.00,
                quantity: 7
            });

        expect(response.statusCode).toBe(200);
    });

    // test("Test update product", async () => {
    //     const response = await request(app)
    //         .delete(`/products/${responseProductCreated.body.id}`);

    //     expect(response.statusCode).toBe(200);
    // });
});

describe("Test clients", () => {
    test("Test create clients", async () => {
        responseClientCreated = await request(app)
            .post('/clients')
            .send({
                name: "Taylor",
                age: 20,
                cpf: "41184005885"
            });

        expect(responseClientCreated.statusCode).toBe(200);
    });

    test("Test get all clients", async () => {
        const response = await request(app)
            .get('/clients');

        expect(response.statusCode).toBe(200);
    });

    test("Test get clients by id", async () => {
        const response = await request(app)
            .get(`/clients/${responseClientCreated.body.id}`);

        expect(response.statusCode).toBe(200);
    });

    test("Test update clients", async () => {
        const response = await request(app)
            .put(`/clients/${responseClientCreated.body.id}`)
            .send({
                name: "Gabriel",
                age: 27,
                cpf: "45789678104"
            });

        expect(response.statusCode).toBe(200);
    });

    // test("Test update clients", async () => {
    //     const response = await request(app)
    //         .delete(`/clients/${responseClientCreated.body.id}`);

    //     expect(response.statusCode).toBe(200);
    // });
});

describe("Test pedido", () => {
    let responsePedidoCreated;

    test("Test create pedido", async () => {
        responsePedidoCreated = await request(app)
            .post('/pedido')
            .send({
                id_product: responseProductCreated.body.id,
                id_client: responseClientCreated.body.id,
                accept: "false",
                description: "1 MacBook"
            });

        expect(responsePedidoCreated.statusCode).toBe(200);
    });

    test("Test get all pedidos", async () => {
        const response = await request(app)
            .get('/pedido');

        expect(response.statusCode).toBe(200);
    });

    test("Test get pedido by id", async () => {
        const response = await request(app)
            .get(`/pedido/${responsePedidoCreated.body.id}`);

        expect(response.statusCode).toBe(200);
    });

    test("Test update pedido", async () => {
        const response = await request(app)
            .put(`/pedido/${responsePedidoCreated.body.id}`)
            .send({
                id_seller: responseSellerCreated.body.id,
                id_product: responseProductCreated.body.id,
                id_client: responseClientCreated.body.id,
                accept: "true",
                value: 500,
                description: "7 MacBook"
            });

        expect(response.statusCode).toBe(200);
    });

    // test("Test update pedido", async () => {
    //     const response = await request(app)
    //         .delete(`/pedido/${responsePedidoCreated.body.id}`);

    //     expect(response.statusCode).toBe(200);
    // });
});