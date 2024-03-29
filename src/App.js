import React from "react";
import "./styles.css";
import WithAuth from "./WithAuth";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const AppWithAuth = WithAuth(App, "id");

export default AppWithAuth;
