const countTotalSalary = function (employees) {
  let total = 0;
  for (let employee of Object.values(employees)) {
    total += employee;
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
