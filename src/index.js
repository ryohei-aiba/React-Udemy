import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>ハロー</h1>
      <p>元気？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
