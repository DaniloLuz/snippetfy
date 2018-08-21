/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.2.0
 */
const express = require('express');

// Utilizando o Router do express para trabalhar com a rotas
const routes = express.Router();
const userController = require('./controllers/authController');

/**
 * Rota /
 */
routes.get('/', userController.signin);
routes.get('/signup', userController.signup);

module.exports = routes;
