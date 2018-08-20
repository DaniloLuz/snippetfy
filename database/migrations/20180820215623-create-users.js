/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
module.exports = {
  up: (queryInterface, DataTypes) => {
    /**
     * Definição de cada coluna da tabela que será criada
     * Tudo escrito aqui dentro define o que será feito no banco de dados quando
     * for executado
     * Por exemplo: Criar tabela Users
    */
    queryInterface.createTable('Users', {
      id: {
        allowNull: false, // Não aceita valor nulo
        autoIncrement: true, // Cada registro gera um id novo e diferente
        primaryKey: true, // Define esse campo como sendo chave primária
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true, // Campo único para cada registro, não pode haver igual
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    /**
     * O codigo aqui dentro é definido por o que será feito quando for necessário
     * dar rollback em algum processo no banco de dados
     * Por exemplo: Deletar tabela Users
     */
    queryInterface.dropTable('Users');
  },
};
