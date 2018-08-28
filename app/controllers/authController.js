/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.6.1
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
      req.flash('error', 'E-mail já cadastrado');
      // Volta para a rota que estava antes de chegar neste método
      return res.redirect('back');
    }

    // Fazendo criptografia da senha digitada
    const password = await bcrypt.hash(req.body.password, 5);

    // Passa as informações digitadas no formulário para criar novo registro
    await User.create({ ...req.body, password });

    req.flash('success', 'Usuário cadastrado com sucesso');
    // Faz redirect
    return res.redirect('/');
  },

  /**
   * Método para realizar a autenticação na plataforma
   * @param {Request} req
   * @param {Reponse} res
   */
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    /**
     * Verifica se existe algum usuário com o e-mail digitado
     */
    if (!user) {
      req.flash('error', 'Usuário inexistente');
      return res.redirect('back');
    }

    /**
     * Verifica se a senha escrita bate com a salva no banco
     */
    if (!await bcrypt.compare(password, user.password)) {
      req.flash('error', 'Senha incorreta');
      return res.redirect('back');
    }

    /**
     * Salva o usuário na sessão
     */
    req.session.user = user;
    return req.session.save(() => {
      res.redirect('app/dashboard');
    });
  },

  /**
   * Faz logout na plataforma
   * @param {Request} req
   * @param {Reponse} res
   */
  signout(req, res) {
    return req.session.destroy(() => {
      res.redirect('/');
    });
  },
};
