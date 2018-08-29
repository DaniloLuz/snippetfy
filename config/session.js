/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.2.0
 */

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models');

module.exports = {
  secret: 'snippetfy2018devteam',
  resave: false,
  saveUninitialized: false, // Não cria a sessão no banco de dados
  store: new SequelizeStore({
    db: sequelize,
  }),
};
