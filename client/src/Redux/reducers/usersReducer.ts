import { userActionTypes } from "../constant/actionTypes";


const initUser = {
    users: []
}

export const usersReducer = (state=initUser, action: any) => {

    switch(action.type){
        case userActionTypes.GET_ALL_USERS:
            return{ ...state, users: action.payload};
        default:
            return state;
    }

}