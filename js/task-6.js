const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let summ = 0;
  for (const allProdcut of allProdcuts) {
    if (allProdcut.name === productName) {
      summ = allProdcut.price * allProdcut.quantity;
    }
  }
  return summ;
};

console.log(calculateTotalPrice(products, 'Радар'));
