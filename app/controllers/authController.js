/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.3.0
 */

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
};
