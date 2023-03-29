import React from 'react';
import {StyleSheet, View} from 'react-native';

import {GlobalStyles} from '../../constants/styles';
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
];

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  console.log('ExpensesOutput');
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
