import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Hobby } from "./components/hobby";
import { Input } from "./components/input";


const App = () => {
    const users = useSelector(state => {return state.users;});
    const [selected, setSelected] = useState("");
    useEffect(() => {
    }, [selected]);
    return(
        <div className="container">
            <div className="input">
                <Input/>
            </div>  
            <div className="userList">
            {
                users.map((user) => {
                    return (
                        <div>
                            <input type="radio" id = {user._id} value={user._id} checked={user._id==selected} onChange={(event) => setSelected(event.target.value)}/>
                            <label>{user.name}</label>
                        </div>
                    )
                })
            }
            </div>  
            <Hobby selectedUser={selected} setSelected={setSelected}/>
        </div>
    )
}

export default App;