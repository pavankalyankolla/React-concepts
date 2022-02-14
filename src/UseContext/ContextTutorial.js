import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <div className="box">
      <h2>Context API</h2>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </AppContext.Provider>
    </div>
  );
}

export default ContextTutorial;
