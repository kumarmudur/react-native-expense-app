import React from 'react';
import {View, Text} from 'react-native';

const ExpensesSummary = () => {
  console.log('ExpensesSummary');
  return (
    <View>
      <View>
        <Text>Last 7 Days</Text>
        <Text>$177.95</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;
