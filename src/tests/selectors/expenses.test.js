import moment from 'moment';
import selectExpenses from '../../selectors/expenses'

const expenses = [{
	id: '1',
	description: 'Coffee',
	note: '',
	amount: 250,
	createdAt: moment(0).add(1, 'day').valueOf()
},
{
	id: '2',
	description: 'Beer',
	note: '',
	amount: 650,
	createdAt: moment(0).subtract(1, 'day').valueOf()
},
{
	id: '3',
	description: 'Gas',
	note: '',
	amount: 2000,
	createdAt: 0
}]
// alphabetically: [1, 0, 2]
// oldest age:  [1, 2, 0]
// most expensive cost: [0, 1, 2]
test('should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};

	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[0], expenses[1]])
});

test('should filter by startDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined,
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[0], expenses[2]])
})

test('should filter by endDate', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0)
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[2], expenses[1]])
})

test('should sort by date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([ expenses[0], expenses[2], expenses[1]])
});

test('should sort by amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
});
