import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Body from "../components/Body";

// https://codepen.io/maximakymenko/pen/aboWJpX/

function App() {
  const menuIcon = React.useRef();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="editor">
      <Menu open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <Body/>
    </div>
  );
}

export default App;
