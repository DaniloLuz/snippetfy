/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.3.1
 */
const express = require('express');

// Utilizando o Router do express para trabalhar com a rotas
const routes = express.Router();
const authController = require('./controllers/authController');

/**
 * Rota /
 */
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);
routes.post('/register', authController.register);

module.exports = routes;
