import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hobbyActions from "../actions/hobbyActions";


export const Hobby = (selectedUser : any, setSelected : any) => {
    const dispatch = useDispatch();
    const hobbies = useSelector((state : any) => {return state.hobbies});
    useEffect(() => {   
        dispatch(hobbyActions.listHobbies(selectedUser.selectedUser));
    },[selectedUser.selectedUser]);

    return (
      <div className="tableContainer" style={selectedUser.selectedUser === "" ? {display:"none"} : {display:"flex"}}>
        <div className="table">
            <table>
                <thead>
                    <tr className="table100-head"> 
                        <th className='tableHeader'>Passion Level</th>
                        <th className='tableHeader'>Name</th>
                        <th className='tableHeader'>Time</th>
                        <th className='tableHeader'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hobbies?.map((hobby: any) => {
                            
                            return (
                                <tr className='tableRowItems'>
                                    <td className='tableCell'>{hobby.passionLevel}</td>
                                    <td className='tableCell'>{hobby.name}</td>
                                    <td className='tableCell'>Since {hobby.time}</td>
                                    <td className="tableCell"><button className="delete">Delete hobby</button></td>  
                                </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
}