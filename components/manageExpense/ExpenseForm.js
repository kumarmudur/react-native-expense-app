import React from 'react';
import {View} from 'react-native';

import Input from './Input';

const ExpenseForm = () => {
  console.log('Expense Form');

  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" />
    </View>
  );
};

export default ExpenseForm;
