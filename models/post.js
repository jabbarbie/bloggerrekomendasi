'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    judul: DataTypes.TEXT,
    opening: DataTypes.TEXT,
    ending: DataTypes.TEXT
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    // post.hasMany(models.rekomendasi, {as: 'pr'})
  };
  return post;
};