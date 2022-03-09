import  Axios, {AxiosResponse } from "axios";

export enum requestVerb {
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
    GET = 'GET'
}

const instance = Axios.create({
	baseURL: 'http://localhost:1337/',
	timeout: 15000,
});


export const makeAPICall = async (methodType : requestVerb, url : string, data : any) => {
    const response : AxiosResponse= await instance({method : methodType, url : url, data : data});
    return response.data;
}