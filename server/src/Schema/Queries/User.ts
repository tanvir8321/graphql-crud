import { GraphQLList } from "graphql";
// import { Users } from "../../Entities/Users";
const db = require('../../Models');
import { UserType } from "../TypeDefs/User";




export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(){
        return db.Users.findAll();
    }

}