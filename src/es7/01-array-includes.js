// saber si hay un elemento dentro del array

let numbers = [1, 3, 4, 6, 7, 8]

console.log(numbers.includes(4)); // true
console.log(numbers.includes(2));// false

const list = ["Oscar", "David", "Ana"]

console.log(list.includes("oscar")); // false
console.log(list.includes("Oscar")); // true

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);