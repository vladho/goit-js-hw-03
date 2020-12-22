const findBestEmployee = function (employees) {
  let best = 0;
  let nameOfBest;
  const keysOfArr = Object.keys(employees)
  const valuesOfArr = Object.values(employees)

    for (let i = 0; i < keysOfArr.length; i += 1) {
        if (valuesOfArr[i] > best) {
            best = valuesOfArr[i];
            nameOfBest = keysOfArr[i]
        }
    }
    return nameOfBest
};



console.log(
  findBestEmployee({
    lux: 147,
    david: 229,
    kiwi: 19,
    chelsy: 3
  }),
); 