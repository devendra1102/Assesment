import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import userAction  from "../actions/userActions";

export const Input = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const onClickHandler = () => {
        dispatch(userAction.addUser(text));
    }
    useEffect(() => {
        dispatch(userAction.listUser());
    },[]);
    return (
    <div className="userInput">
        <input type = "text" onChange={event => setText(event.target.value)} value={text}/>
        <button onClick={() => onClickHandler()}>Add new User</button>
    </div>
    )
}