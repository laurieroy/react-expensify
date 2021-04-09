import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense }  from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000 , createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 3000 , createdAt: -1000 }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// console.log(state);

ReactDOM.render(<AppRouter /> , document.getElementById('app'));

