import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense }  from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000 , createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 2000 , createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Electricity Bill', amount: 3000 , createdAt: 0 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
	<Provider store ={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

