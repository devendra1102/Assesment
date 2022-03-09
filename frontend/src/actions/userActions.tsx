import { makeAPICall, requestVerb } from "../utility";

const addUser = (name : string) => {
    return async (dispatch : any, getState : any) => {
        await makeAPICall(requestVerb.POST, "/users",{name : name});

        const response = await makeAPICall(requestVerb.GET,"/users", {});
        dispatch({
            type : "ADD_USER",
            payload : response.users
        });
    }
}

const listUser = () => {
    return async (dispatch : any, _getState : any) => {
        const response = await makeAPICall(requestVerb.GET,"/users", {});
        dispatch({
            type : "FETCH_USERS",
            payload : response.users
        });
    }
}


export default {addUser, listUser}