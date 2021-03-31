"use strict";

console.log("app.js is running");

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer?",
	options: []
};
var onRemoveAll = function onRemoveAll(e) {
	e.preventDefault();

	app.options = [];
	render();
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

var appRoot = document.getElementById('app');

var render = function render() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			app.title
		),
		app.subtitle && React.createElement(
			"p",
			null,
			app.subtitle
		),
		React.createElement(
			"p",
			null,
			app.options.length > 0 ? "Here are your options" : "No Options"
		),
		React.createElement(
			"p",
			null,
			app.options.length
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll, id: "removeAll", className: "btn" },
			"Remove All Options"
		),
		React.createElement(
			"ol",
			null,
			React.createElement(
				"li",
				null,
				app.options[0]
			),
			React.createElement(
				"li",
				null,
				app.options[1]
			)
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
