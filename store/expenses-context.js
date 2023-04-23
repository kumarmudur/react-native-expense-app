import React, {useReducer} from 'react';
import {createContext} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-9'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.59,
    date: new Date('2022-1-10'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 10.59,
    date: new Date('2022-1-15'),
  },
  {
    id: 'e4',
    description: 'books',
    amount: 15.29,
    date: new Date('2021-12-10'),
  },
  {
    id: 'e5',
    description: 'Laptops',
    amount: 105.29,
    date: new Date('2022-1-25'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-9'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 89.59,
    date: new Date('2022-1-10'),
  },
  {
    id: 'e8',
    description: 'Some bananas',
    amount: 10.59,
    date: new Date('2022-1-15'),
  },
  {
    id: 'e9',
    description: 'books',
    amount: 15.29,
    date: new Date('2021-12-10'),
  },
  {
    id: 'e10',
    description: 'Laptops',
    amount: 105.29,
    date: new Date('2022-1-25'),
  },
  {
    id: 'e11',
    description: 'Monitors',
    amount: 105.29,
    date: new Date('2022-1-25'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id, ...state}];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatableExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = expenseData => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = id => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id, data: expenseData}});
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
