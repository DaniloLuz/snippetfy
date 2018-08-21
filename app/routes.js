/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.5.0
 */
const express = require('express');

// Utilizando o Router do express para trabalhar com a rotas
const routes = express.Router();
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const authMiddleware = require('./middlewares/auth');

/**
 * Middleware de mensagens flash
 */
routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

/**
 * Definindo que todas as rotas /app precisam passar pelo
 * middleware de verificação de sessão
 */
routes.use('/app', authMiddleware);

/**
 * Rota /
 */
routes.get('/', authController.signin);
routes.get('/signup', authController.signup);
routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);
routes.get('/app/dashboard', dashboardController.index);

module.exports = routes;
