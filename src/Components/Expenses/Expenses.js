import React, { useState } from "react";
import Card from "../Card/Card";
import Chart from "../Chart/Chart";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";
import ExpensesChat from "./ExpensesChat";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChat expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
