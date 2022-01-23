import { userActionTypes } from "../constant/actionTypes";


export const getAllUsersAction = (users: any) => {
    return{
        type: userActionTypes.GET_ALL_USERS,
        payload: users,
    }
}
