const { request, response } = require("express");
const express = require("express");
const Contenedor = require('../2daEntrega/2doDesafio');
const arrayDeProductos = new Contenedor();

const app = express();


app.get("/productos", (req, res) => {
    res.send(arrayDeProductos.getAll());
})

app.get("/productoRandom", (req, res) => {
    response.send('Devuelve un producto al azar');
})

app.get("*", (req, res) => {
    response.send('Error 404 - Page not found');
})

const server = app.listen(8080, () => {
    console.log(`servidor http escuchando en http://localhost:8080/`)
});
