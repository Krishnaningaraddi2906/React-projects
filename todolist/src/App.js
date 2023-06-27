import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
const App = (props) => {
  const [currentvalue, newvalue] = useState("");

  const [value, setValue] = useState([]);

  const inputvalue = (event) => {
    const data = event.target.value;
    newvalue(data);
  };
  const finalValue = () => {
    setValue((oldItems) => {
      return [...oldItems, currentvalue];
    });
    newvalue("");
  };

  const removeitem=(id)=>
  {
    setValue((oldItems) => 
    {
      return oldItems.filter((arrEle,index)=>
      {
        return index!==id;
      })
    })
  }

  return (
    <>
      <div className="mainscreen">
        <div className="todoDiv">
          <h1>TODO LIST</h1>
          <br />
          <br />
          <div>
            <input
              placeholder="Enter the task"
              type="text"
              onChange={inputvalue}
              value={currentvalue}
            />
            <button onClick={finalValue} className="Addbutton">
              +
            </button>
          </div>
          <br />
          <ul>
            {value.map((itemval, index) => {
              return <Todolist 
              key={index} 
              id={index} 
              text={itemval} 
              onSelect={removeitem}  
              />;
            })}

          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
