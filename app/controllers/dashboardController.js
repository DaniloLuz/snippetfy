/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.2.0
 */
const { Category, Snippet } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const categories = await Category.findAll({
        include: [Snippet], // Eager Load
        where: {
          UserId: req.session.user.id, // Retorna apenas as categorias do user
        },
      });

      return res.render('dashboard/index', { categories });
    } catch (err) {
      return next(err);
    }
  },
};
