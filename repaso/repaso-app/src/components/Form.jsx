import * as React from "react";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [employeeAge, setEmployeeAge] = useState(0);
  const [ageMessage, setAgeMessage] = useState('Welcome!');

  useEffect(() => {
    if(employeeAge >= 18){
      setAgeMessage('Welcome');
    } else{
      setAgeMessage('Sorry, you are under 18');
    }
    console.log('use effect');
  }, [employeeAge, usao, precio, marcas]);
  
  const employeeAgeHandler = (event) => {
    setEmployeeAge(event.target.value);
    console.log('handler');
  };

  return (
    <React.Fragment>
      <label>Age: </label>
      <input type="number" name="age" value={employeeAge} 
      onChange={employeeAgeHandler} 
      />

      <p>{ageMessage}</p>
      {employeeAge>=18 ? <p>welcome x2</p>: <p>Not welcome pt 2</p>}
    </React.Fragment>
  );
};


export default Form;
