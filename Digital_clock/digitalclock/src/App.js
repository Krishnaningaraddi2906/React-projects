import React, { useState } from "react";
import "./App.css";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [Ctime, Utime] = useState(time);

  const UpdatedTime = () => {
    return Utime(new Date().toLocaleTimeString());
  };

  setInterval(UpdatedTime, 1000);

  return (
    <div className="timeDiv">
      <h1>{Ctime}</h1>
    </div>
  );
};

export default App;
