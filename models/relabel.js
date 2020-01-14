


'use strict';
module.exports = (sequelize, DataTypes) => {
  const relabel = sequelize.define('relabel', {
    id_manga: DataTypes.INTEGER,
    id_label: DataTypes.INTEGER
  }, {});
  relabel.associate = function(models) {
    // associations can be defined here
    relabel.belongsTo(models.manga, {foreignKey: 'id_manga'})
    relabel.belongsTo(models.label, {foreignKey: 'id_label'})
  };
  return relabel;
};