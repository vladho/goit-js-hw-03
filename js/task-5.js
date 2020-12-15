const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
    const a = []
    
    for (const ar of arr) {
        if (Object.keys(ar).includes(prop)) {
            a.push(ar[prop]);
        }
    }
    return a
};

console.log(getAllPropValues(products, 'quantity'))
