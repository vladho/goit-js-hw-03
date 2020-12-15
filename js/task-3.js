const findBestEmployee = function (employees) {
    let best = 0;
    let nameOfBest;
    for (let i = 0; i < Object.values(employees).length; i += 1) {
        if (Object.values(employees)[i] > best) {
            best = Object.values(employees)[i];
            nameOfBest = Object.keys(employees)[i]
        }
    }
    return nameOfBest
};

console.log(
  findBestEmployee({
    lux: 147,
    david: 221,
    kiwi: 19,
    chelsy: 3
  }),
); 