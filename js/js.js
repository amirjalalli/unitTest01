const sum = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

// const seperator = (array, odd, callback) => {
//   callback(array.filter(odd));
// };

const seperator = (array, odd, callback) => {
  callback(array.filter(odd));
};
const sepEven = (array, even, callback) => {
  callback(array.filter(even));
};

const evenSetTimeOut = (array, even, callback) => {
  setTimeout(() => {
    callback(array.filter(even));
  }, 1000);
};

const promiseArray = (array, odd) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array.filter(odd));
    }, 1000);
  });
};

module.exports = {
  sum,
  sub,
  seperator,
  sepEven,
  evenSetTimeOut,
  promiseArray,
};
