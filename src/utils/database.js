const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'postgres'
    });

module.exports = sequelize;