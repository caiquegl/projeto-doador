module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define(
        "usuarios", 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              nome: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
              },
              telefone: {
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

        usuarios.associate = (models) => {
            usuarios.hasMany(models.trocas, { foreignKey: "idDoador", as: "trocas" })
          };

          usuarios.associate = (models) => {
            usuarios.hasMany(models.trocas, { foreignKey: "idReceptor", as: "trocas" })
          };

    return usuarios;
  
    };