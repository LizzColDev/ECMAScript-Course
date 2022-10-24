// forma para generar filtros o reglas, validaciones

const regex =  /\b(Apple)+\b/g; // buscar la palabra "Apple" dentro de un string
const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc';
for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
// Output
// [
//     'Apple',
//     'Apple',
//     index: 0,
//     input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc',
//     groups: undefined
//   ]
//   [
//     'Apple',
//     'Apple',
//     index: 21,
//     input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc',
//     groups: undefined
//   ]
  
// example2 

// const regex = /\b(White)+\b/g;

// const colors = 'Red, Green, Yellow, Black, White, Grey';

// for (const match of colors.matchAll(regex)){
//  console.log(match);
// }