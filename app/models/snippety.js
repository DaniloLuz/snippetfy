/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
module.exports = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  });

  Snippet.associate = (models) => {
    // A categoria pertence ao usuário
    Snippet.belongsTo(models.Category);
  };

  return Snippet;
};
