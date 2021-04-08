import { createStore } from "redux";
// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resestCount = () => ({
	type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			}
		case 'RESET':
			return {
				count: 0
			};

		default: 
			return state;
		}
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(incrementCount());

store.dispatch(resestCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));


