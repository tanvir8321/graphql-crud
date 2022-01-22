import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



// it is the type defination of user table
export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    }),
});