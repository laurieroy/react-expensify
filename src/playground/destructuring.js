// const person = {
// 	// name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 93
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// // const {city, temp} = person.location;
// // if (person.location.city && person.location.temp){
// // 	console.log(`It's ${temp} in ${city}.`)
// // }
// // can rename variable in destructure
// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}.`)

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin'
// 	}
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);

// ARRAY DESTRUCTURING
const address = ['1299 S Juniper St', 'Philly', 'PA', '19147'];
console.log(`You are in ${address[1]} ${address[2]}`)
// but this isn't clear

// const [street, city, state, zip ] = address;
console.log(`You are in ${city} ${state}`)
// skip items by omitting but leaving comma to idnicate space
// name is not important, whatever you want
// can set defaults
// skip by leaving off at end
const [, city, state='New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [item1, , medCost] = item
console.log(`A medium ${item1} costs ${medCost}`)