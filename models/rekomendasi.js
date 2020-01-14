'use strict';
module.exports = (sequelize, DataTypes) => {
  const rekomendasi = sequelize.define('rekomendasi', {
    id_artikel: DataTypes.INTEGER,
    posisi: DataTypes.INTEGER,
    id_manga: DataTypes.INTEGER
  }, {});
  rekomendasi.associate = function(models) {
    // associations can be defined here
    rekomendasi.belongsTo(models.post, {foreignKey: 'id_artikel'})
    rekomendasi.belongsTo(models.manga, {foreignKey: 'id_manga'})
  };
  return rekomendasi;
};