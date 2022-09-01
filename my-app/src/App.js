import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 77, date: new Date(2021, 2, 28) },
    { title: "Disney Plus Sub", amount: 10, date: new Date(2021, 9, 12) },
    { title: "Spiderman cosplay", amount: 40, date: new Date(2022, 7, 10) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
