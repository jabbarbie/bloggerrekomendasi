'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define('manga', {
    judul: DataTypes.STRING,
    keterangan: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    type: DataTypes.STRING,
    alternative_name: DataTypes.STRING,
    genre: DataTypes.STRING,
    chapter: DataTypes.STRING,
    review: DataTypes.STRING,
    mc: DataTypes.STRING,
    bookmark: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  Manga.associate = function(models) {
    // associations can be defined here
    Manga.belongsToMany(models.label, {
      through: 'relabel',
      foreignKey: 'id_manga',
      as: 'ml'
    })

    Manga.belongsToMany(models.label, {
      through: 'rekomendasi',
      foreignKey: 'id_manga',
      as: 'mr'
    })



  };

  return Manga;
};