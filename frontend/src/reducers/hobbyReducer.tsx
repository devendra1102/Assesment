import { IHobbyProps } from "../props/hobbyProps";

const initialState : IHobbyProps[] = [];

export const hobbyReducer = (state = initialState, action : any) => {
    switch(action.type){
        case("FETCH_HOBBIES"):
            return action.payload;
        case("ADD_HOBBY"):
            return action.payload;
        case("DELETE_HOBBY"):
            return action.payload;
        default:
            return state;
    }
}
