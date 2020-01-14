


'use strict';
module.exports = (sequelize, DataTypes) => {
  const relabel = sequelize.define('relabel', {
    mangaId: DataTypes.INTEGER,
    labelId: DataTypes.INTEGER
  }, {});
  relabel.associate = function(models) {
    // associations can be defined here
    relabel.belongsTo(models.manga, {foreignKey: 'mangaId'})
    relabel.belongsTo(models.label, {foreignKey: 'labelId'})
  };
  return relabel;
};