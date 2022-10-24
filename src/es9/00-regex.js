const regex = /(\d{4})-(\d{2})-(\d{2})/; // tipo de fecha formato 4-2-2 unidades
const matchers = regex.exec("2022-01-01");

console.table(matchers);
console.log(matchers);

// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ '2022-01-01' │
// │    1    │    '2022'    │
// │    2    │     '01'     │
// │    3    │     '01'     │
// │  index  │      0       │
// │  input  │ '2022-01-01' │
// │ groups  │  undefined   │
// └─────────┴──────────────┘

// [
//     '2022-01-01',
//     '2022',
//     '01',
//     '01',
//     index: 0,
//     input: '2022-01-01',
//     groups: undefined
//   ]
