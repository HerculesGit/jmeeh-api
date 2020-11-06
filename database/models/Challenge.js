/**
 * source: https://sequelize.org/master/manual/model-basics.html
 */

const { DataTypes } = require('sequelize');
const connection = require('../database');

const Challenge = connection.define('challenge',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    difficultyLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    links: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      // allowNull defaults to true
    },
    endDate: {
      type: DataTypes.DATE,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    // owner: { // oneToOne
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // participants: { // oneToMany
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    // submissions: { // OneToMany
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
  }
);
Challenge.sync({ force: false });
module.exports = Challenge;
