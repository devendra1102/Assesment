import { makeAPICall, requestVerb } from "../utility"

const addHobby = () => {
    return async (dispatch : any, _getState : any) => {
        await makeAPICall(requestVerb.POST,"/hobby",{});
        const response = await makeAPICall(requestVerb.GET,"/users",{});
        dispatch({
            type : "ADD_HOBBY",
            payload : response.data?.hobbies
        });
    }
}

const deleteHobby = () => {
    return async (dispatch : any, _getState : any) => {
        await makeAPICall(requestVerb.DELETE,"/hobby/:id",{});
        const response = await makeAPICall(requestVerb.GET,"/users/:userid",{});
        dispatch({
            type : "DELETE_HOBBY",
            payload : response.data?.hobbies
        });
    }
}

const listHobbies = (userId : any) => {
    return async(dispatch : any, _getState : any) => {
        if(userId){
            const response = await makeAPICall(requestVerb.GET,`/users/${userId}`,{});
            console.log(response?.hobbies);
            dispatch({
                type : "FETCH_HOBBIES",
                payload : response?.hobbies
            });
        }
       
    }
}
export default {
    addHobby,
    deleteHobby,
    listHobbies
}