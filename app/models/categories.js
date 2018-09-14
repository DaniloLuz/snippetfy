/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  Category.associate = (models) => {
    // A categoria pertence ao usuário
    Category.belongsTo(models.User);
    // Uma categoria pode ter vários snippets
    Category.hasMany(models.Snippet);
  };

  return Category;
};
