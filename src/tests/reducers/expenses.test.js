import moment from 'moment';
import uuid from 'uuid';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add expense', () => {
	const testAddExpense = {
		id: uuid(),
		description: 'Added expense',
		note: 'Added expense',
		amount: 500,
		createdAt: moment()
		
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense: testAddExpense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ ...expenses, testAddExpense]);
});

test('should edit an expense', () => {
	const amount = 12500;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
	const amount = 12500;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});


