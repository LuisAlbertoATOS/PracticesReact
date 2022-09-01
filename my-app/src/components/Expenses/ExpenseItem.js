import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // [variable, function to update value] = useState(default value);

  const clickHandler = () => {
    setTitle("updated title");
  };

  return (
    <li>
      <Card className="expense-item">
        {/* <ExpenseDate date={props.date} /> */}
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
        <button onClick={clickHandler}>change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
