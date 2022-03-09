import { IHobbyProps } from "./hobbyProps";

export interface IUserProps {
    name : string,
    id : string,
    hobbies : IHobbyProps[];
}