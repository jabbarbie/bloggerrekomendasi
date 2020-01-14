'use strict';
module.exports = (sequelize, DataTypes) => {
  const label = sequelize.define('label', {
    label: DataTypes.STRING
  }, {});
  label.associate = function(models) {
    // associations can be defined here
    label.belongsToMany(models.manga, {through: 'relabel',foreignKey: 'id_label', as: 'lm'})
  };
  return label;
};