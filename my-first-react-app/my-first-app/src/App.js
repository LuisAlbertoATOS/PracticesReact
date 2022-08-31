import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car insurance', amount: 77, date: new Date(2021, 2, 28)},
    {title: 'Disney Plus Sub', amount: 10, date: new Date(2021, 9, 12)},
    {title: 'Spiderman cosplay', amount: 40, date: new Date(2022, 7, 10)}
  ];

  return (
    <div>
      <h2>Let's start!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
