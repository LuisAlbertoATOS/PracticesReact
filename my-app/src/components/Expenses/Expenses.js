import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.items} />
      <ExpensesList items={props.items} />
    </Card>
  );
};

export default Expenses;
