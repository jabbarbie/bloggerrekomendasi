'use strict';
module.exports = (sequelize, DataTypes) => {
  const rekomendasi = sequelize.define('rekomendasi', {
    artikelId: DataTypes.INTEGER,
    posisi: DataTypes.INTEGER,
    mangaId: DataTypes.INTEGER
  }, {});
  rekomendasi.associate = function(models) {
    // associations can be defined here
    rekomendasi.belongsTo(models.post, {foreignKey: 'artikelId'})
    rekomendasi.belongsTo(models.manga, {attributes: ['judul'], foreignKey: 'mangaId', as: 'rm'})
    // rekomendasi.belongsTo(models.relabel, {foreignKey: 'artikelId'})

  };
  return rekomendasi;
};