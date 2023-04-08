import React, {useContext} from 'react';

import ExpensesOutput from '../../components/expensesOutput/ExpensesOutput';
import {ExpensesContext} from '../../store/expenses-context';

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="Total" />
  );
};

export default AllExpenses;
