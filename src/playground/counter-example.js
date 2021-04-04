class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		}
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}
	handleReset() {
		this.setState(() => {
			return {count: 0 }
		})
		// OLDER METHOD - not preferred
		// this.setState({
		// 	count: 0 
		// })
		// this.setState({
		// 	count: this.state.count + 1
		// })
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		)
	}
}
ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
// 	count++
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--
// 	renderCounterApp();
// };
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };
// const someId = 'myidhere'
// const templateTwo = (
// 	<div>
// 		<h1>Count: {count}</h1>
// 		<button onClick={addOne} id="addOne" className="btn">+1</button>
// 		<button onClick={minusOne} id="minusOne" className="btn">-1</button>
// 		<button onClick={reset} id="reset" className="btn">reset</button>
// 	</div>
// );
// console.log(templateTwo)

// const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne} id="addOne" className="btn">+1</button>
// 			<button onClick={minusOne} id="minusOne" className="btn">-1</button>
// 			<button onClick={reset} id="reset" className="btn">reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();