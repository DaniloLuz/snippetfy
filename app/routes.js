/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.4.0
 */
const express = require('express');

// Utilizando o Router do express para trabalhar com a rotas
const routes = express.Router();
const authController = require('./controllers/authController');

/**
 * Middleware de mensagens flash
 */
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});
/**
 * Rota /
 */
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);
routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

module.exports = routes;
