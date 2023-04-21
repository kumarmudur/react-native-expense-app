import React from 'react';
import {FlatList} from 'react-native';

import ExpenseItem from './ExpenseItem';

const renderExpenseItem = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({expenses}) => {
  console.log('ExpensesList');
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;
