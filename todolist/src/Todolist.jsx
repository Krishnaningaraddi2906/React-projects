import React from "react";
import "./Todolist.css";
const Todolist=(props)=>
{



    return(
        <>
        <div className="libox">
          <button className="Removebutton" onClick={
            ()=>
            {
              props.onSelect(props.id);
            }
          }>X</button>
          <li>{props.text}</li>
        </div>
        </>
    )
}


export default Todolist;