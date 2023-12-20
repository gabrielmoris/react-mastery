import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}

// In JavaScript, the function* syntax is used to declare a generator function.
// A generator function returns a special type of iterator known as a generator.
// Generators allow you to define an iterative algorithm by writing a function that
// can maintain its own state and produce a sequence of values over time.

// Here's a basic example of a generator function:

// javascript
// Copy code
// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = numberGenerator();

// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2
// console.log(iterator.next().value); // Output: 3
// console.log(iterator.next().value); // Output: undefined
// In this example:

// function* numberGenerator() declares a generator function named numberGenerator.
// yield is used inside the generator function to specify the values that the generator
// will produce when iterated over.
// iterator.next() is used to retrieve the next value from the generator sequence.
// The value property of the returned object holds the yielded value.
