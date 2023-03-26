import React from 'react';
import {View} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

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
];

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  console.log('ExpensesOutput');
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
