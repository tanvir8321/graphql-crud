import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Message";
import { UserType } from "../TypeDefs/User";


// create user mutation
export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const { name, username, password } = args;
        await Users.insert(args)
        return args 
    },
}

// delete user mutation
export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent:any, args:any) {
        const id = args.id;
        await Users.delete(id);
        return id;
    }
}

// update password by username
export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent:any, args:any) {
        const { username, oldPassword, newPassword } = args;
        const user = await Users.findOne({ username: username }); // it return one user using 'findOne' by username
        if(!user){
            throw new Error("User does not exist!");
        }
        const userPassword = user?.password;
        if(oldPassword === userPassword){
            await Users.update({ username: username}, { password: newPassword });
            return { success: true, message: "Password updated."};

        }else{
            throw new Error("Password did not matched!");
        }
    }
}