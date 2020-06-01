module.exports = (sequelize, DataTypes) => {
    const trocas = sequelize.define(
        "trocas", 
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
              },
              idDoador: {
                type: DataTypes.INTEGER,
                // references: {
                //   model: {
                //     tableName: "usuarios",
                //   },
                //   key: "id",
                // },
              },
              idReceptor: {
                type: DataTypes.INTEGER,
                // references: {
                //   model: {
                //     tableName: "usuarios",
                //   },
                //   key: "id",
                // },
              },
              status: {
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

        trocas.associate = (models) => {
            trocas.belongsTo(models.usuarios, {foreignKey:"id", as: 'usuarios'});
          };

          trocas.associate = (models) => {
            trocas.hasMany(models.itensTrocas, { foreignKey: "idITem", as: "itensTrocas" })
          };
    return trocas;
  
    };