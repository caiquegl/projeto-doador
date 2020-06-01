module.exports = (sequelize, DataTypes) => {
    const itens = sequelize.define(
        "itens", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
              },
              nome: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              descricao: {
                type: DataTypes.STRING,
                allowNull: false,
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

    return itens;
  
    };