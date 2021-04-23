import React from "react";
import { shallow } from "enzyme";
import moment from 'moment';
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, history, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByAmount = jest.fn();
	sortByDate = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setTextFilter={setTextFilter}
			sortByAmount={sortByAmount}
			sortByDate={sortByDate}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('should handle date changes correctly', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate)
	expect(setEndDate).toHaveBeenLastCalledWith(endDate)
});

test('should handle date focus changes correctly', () => {
	const calendarFocused = 'endDate';
	wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocuses')).toBe(calendarFocused);
});

test('should handle text change correctly', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target: { value }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount correctly', () => {
	const value = 'amount';
	wrapper.find("select").simulate("change", {
		target: { value }
	});
 
  expect("sortByAmount").toHaveBeenCalled();
});

test('should sort by date correctly', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});

	wrapper.find("select").simulate("change", {
		target: { value }
	});

  expect("sortByDate").toHaveBeenLastCalledWith(value);
});
