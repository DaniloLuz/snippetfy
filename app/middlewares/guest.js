/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
module.exports = (req, res, next) => {
  /**
   * Veririfca se a sessão do usuário foi criada
   */
  if (!req.session.user) {
    return next();
  }

  /**
   * Caso a sessão já tenha sido criada, ou seja, o usuário fez login
   * Ele será redirecionado para a tela do dashboard
   */
  return res.redirect('/app/dashboard');
};
