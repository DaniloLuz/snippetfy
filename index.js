/*!
 * snippetfy
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * MIT Licensed
 */

/**
 * Dependencia de modulos.
 */
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

/**
 * Definindo Express
 */
const app = express();

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
 * Rota de teste
 */
app.get('/', (req, res) => {
  res.render('index');
});

/**
 * Iniciando aplicação na porta 3000
 */
app.listen(3000);
