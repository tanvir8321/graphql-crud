import express from 'express';
const db = require("./Models/index.ts");
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
// import { createConnection } from 'typeorm';
const { Sequelize, DataTypes } = require('sequelize');

import { Users } from './Entities/Users';


const main = async () => {

    // const sequelize = new Sequelize('aunkurstg', 'aunkusr', '$AunKuR!!$$123', {
    //     host: 'localhost',
    //     dialect: 'mssql'
    // });


    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
    
    db.sequelize.sync();



    // await createConnection({
    //     type: "mysql",
    //     database: "graphqlcrud",
    //     username: "root",
    //     password: "12345678",
    //     logging: true, 
    //     synchronize: false,
    //     entities: [Users],
    //   });
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(3000, () => {
        console.log("server running at 3000");
    })
}
main().catch((err) => {
    console.log(err);
});