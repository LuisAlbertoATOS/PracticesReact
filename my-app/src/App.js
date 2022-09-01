import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "1", title: "Car insurance", amount: 77, date: new Date(2021, 2, 28) },
  {
    id: "2",
    title: "Disney Plus Sub",
    amount: 10,
    date: new Date(2021, 9, 12),
  },
  {
    id: "3",
    title: "Spiderman cosplay",
    amount: 40,
    date: new Date(2022, 7, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
