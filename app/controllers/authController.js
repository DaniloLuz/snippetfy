/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.4.0
 */
const bcrypt = require('bcryptjs');
const { User } = require('../models');

module.exports = {
  /**
   * Método para fazer login
   * @param {Request} req
   * @param {Reponse} res
   */
  signin(req, res) {
    return res.render('auth/signin');
  },

  /**
   * Método para fazer cadastro novo
   * @param {Request} req
   * @param {Reponse} res
   */
  signup(req, res) {
    return res.render('auth/signup');
  },

  /**
   * Método para criar novo registro
   * @param {Request} req
   * @param {Reponse} res
   */
  async register(req, res) {
    const { email } = req.body;

    // Verifica se já existe um usuário com este registro
    if (await User.findOne({ where: { email } })) {
      // Volta para a rota que estava antes de chegar neste método
      return res.redirect('back');
    }

    // Fazendo criptografia da senha digitada
    const password = await bcrypt.hash(req.body.password, 5);

    // Passa as informações digitadas no formulário para criar novo registro
    await User.create({ ...req.body, password });

    // Faz redirect
    return res.redirect('/');
  },
};
