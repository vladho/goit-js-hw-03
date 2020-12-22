const countTotalSalary = function (employees) {
  let total = 0;
  const valuesOfemployees = Object.values(employees)
  for (let employee of valuesOfemployees) {
    total += employee;
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 100,
  }),
);
