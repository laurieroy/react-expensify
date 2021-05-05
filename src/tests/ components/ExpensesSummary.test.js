import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary} from '../../components/ExpensesSummary';

test('should return correct summary for 1 item', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);
	expect(wrapper).toMatchSnapshot();
});

test('should return correct summary for +1 items', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={750} />);
	expect(wrapper).toMatchSnapshot();
});