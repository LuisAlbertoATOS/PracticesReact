import * as React from "react";
import { useState } from "react";

const Header = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const changePara = () => {
    props.onClick("hola soy tu hijo");
    setShowMessage(!showMessage)
    console.log(showMessage);
  };

  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={changePara}>change para</button>
      { showMessage ? <p>My message: {JSON.stringify(showMessage)}</p> : <p>Lolo</p> }
      { (showMessage && !showMessage) && <p>Lololololo</p> }
    </React.Fragment>
  );
};

export default Header;

