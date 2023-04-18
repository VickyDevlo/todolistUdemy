import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
  return (
    <div>
      {filteredExpenses.length === 0 ? (
        <h2 className="no-expenses-msg">No Expenses Found.</h2>
      ) : (
        filteredExpenses.map((list, index) => (
          <ExpenseItem
            key={index}
            title={list.title}
            amount={list.amount}
            date={list.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpensesList;
