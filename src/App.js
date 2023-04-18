import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const expensesData = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 11, 18),
  },
  {
    title: "New Phone",
    amount: 104.67,
    date: new Date(2022, 1, 18),
  },
  {
    title: "New PS5",
    amount: 504.67,
    date: new Date(2022, 10, 20),
  },
  {
    title: "Home Loan",
    amount: 300.15,
    date: new Date(2021, 2, 10),
  },
  {
    title: "New Bike",
    amount: 250.15,
    date: new Date(2021, 1, 10),
  },
  {
    title: "New TV",
    amount: 799.45,
    date: new Date(2021, 3, 15),
  },
   
  {
    title: "New Laptop",
    amount: 450,
    date: new Date(2023, 2, 28),
  },
];
function App() {
  const [expenses, setExpenses] = useState(expensesData);

  // add new expenses
  const addExpensesHandler = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
