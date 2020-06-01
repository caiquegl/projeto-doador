module.exports = (sequelize, DataTypes) => {
    const itensTrocas = sequelize.define(
        "itensTrocas", 
        {
            idTroca: {
                type: DataTypes.INTEGER,
                },
                idITem: {
                  type: DataTypes.INTEGER,
                //   references: {
                //     model: {
                //       tableName: 'trocas',
                //     },
                //     key: 'id',
                //   },
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

        itensTrocas.associate = (models) => {
          itensTrocas.belongsTo(models.trocas, {foreignKey:"id", as: 'trocas'});
        };

    return itensTrocas;
  
    };