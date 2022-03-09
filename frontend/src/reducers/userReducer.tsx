import { IUserProps } from "../props/userProps";

const initialState : IUserProps[] = []; 
export const userReducer = (state = initialState, action : any) => {
    switch(action.type){
        case("FETCH_USERS"):
            return action.payload; 
        case("ADD_USER"):
            return action.payload;
        default:
            return state;
    }

}

