import React, {useReducer} from 'react';
import {createContext} from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
    case 'DELETE':
    case 'UPDATE':
    default:
      return state;
  }
};

const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
