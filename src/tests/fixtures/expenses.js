import moment from 'moment';

export default [{
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