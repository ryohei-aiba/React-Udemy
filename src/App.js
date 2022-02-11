import React from "react";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>ハロー</h1>
      <p style={contentStyle}>元気？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
