/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
const { User } = require('../models');

module.exports = {
  /**
   * Função index que retorna todos os usuários da tabela Users usando async await
   * @param {Request} req
   * @param {Reponse} res
   */
  async index(req, res) {
    const users = await User.findAll();

    res.render('index', { users });
  },
};
