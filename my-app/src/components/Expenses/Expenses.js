import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesList items={props.items}/>
    </Card>
  );
};

export default Expenses;
