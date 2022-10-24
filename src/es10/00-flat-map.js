// nos evía una matriz dentro de otra
const array = [1, 2, 2, 3, [4, 5, 6,7, [8,9,10]]]

console.log(array.flat(3)); // el flat nos saca los array a uno solo, el número se refiere a la cantidad de arrays que quiere sacar
// [
//     1, 2, 2, 3, 4,
//     5, 6, 7, 8, 9,
//    10
//  ]

//flatmap

const array2 = [1,2,3,4,5]
console.log(array2.flatMap(v =>[v, v*2])); // nos agrega a nuestro array lo que le hayamos pasado en la funci´n

// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
//   ]