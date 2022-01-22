import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { GET_ALL_USERS } from "./Queries/User";


// it is the combination of all query of graphql
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        // read/get/fetch from database
        getAllUsers: GET_ALL_USERS, // get all data from 'users' table
    }
});


// it is the combination of all mutation of graphql
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // delete, update, create mutation
        createUser: CREATE_USER, // insert data into 'users' table
        deleteUser: DELETE_USER, // delete table data by user id from 'users' table
        updatePassword: UPDATE_PASSWORD, // update password by username in 'users' table
        
    }
});


// it is export the schema which contains query and mutation
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});