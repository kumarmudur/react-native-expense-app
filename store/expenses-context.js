import {createContext} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});
