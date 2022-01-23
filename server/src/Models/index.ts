// const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

const sequelize = new Sequelize('aunkurstg', 'aunkusr', '$AunKuR!!$$123', {
    host: 'localhost',
    dialect: 'mssql'
});

const db:any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./User.model.ts")(sequelize, Sequelize);

module.exports = db;