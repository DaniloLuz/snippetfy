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
  if (req.session && req.session.user) {
    return next();
  }

  /**
   * Caso a sessão não tenha sido criada, ou seja, o usuário não fez login
   * Ele não poderá acessar as páginas sem login
   */
  req.flash('error', 'Não autorizado');
  return res.redirect('/');
};
