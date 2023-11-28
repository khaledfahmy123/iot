import { useState } from "react";
import "./App.css";
import Home from "./Compos/Home/Home";
import Register from "./Compos/Register/Register";
function App() {
  const [user, setUser] = useState("12");
  const registerHandler = (user) => {
    setUser(user);
  };
  return (
    <>
      {user ? (
        <Home user={user} />
      ) : (
        <Register registerHandler={registerHandler} />
      )}{" "}
    </>
  );
}

export default App;
