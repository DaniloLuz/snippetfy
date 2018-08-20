/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.5.0
 */

/**
 * Dependencia de modulos.
 */
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./app/routes');

/**
 * Definindo Express
 */
const app = express();

/**
 * Defindo para o express o caminho da pasta public
 */
app.use(express.static(path.resolve('app', 'public')));

/**
 * Configurando template engine nunjucks definindo o diretorio das views
 */
nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

/**
 * Definindo extensão do arquivo usado na view engine
 */
app.set('view engine', 'njk');

/**
 * Configuração do body parser
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Passando as rotas que serão utilizadas no projeto
 */
app.use('/', routes);

/**
 * Iniciando aplicação na porta 3000
 */
app.listen(3000);
