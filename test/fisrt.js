const assert = require("assert");
const expect = require("chai").expect;
const js = require("../js/js");

// describe("DB", () => {
//   it("first", () => {});
//   it("second", () => {
//     throw Error("this file has Error");
//   });
// });

// describe("test sum", () => {
//   it("return 25 + 4 = 29", () => {
//     let num1 = 25;
//     let num2 = 4;

//     if (num1 + num2 === 29) {
//       return true;
//     } else {
//       throw Error("Not Throw");
//     }
//   });
// });

// describe("test sum", () => {
//   it("return 25 + 4 = 29", () => {
//     let num1 = 25;
//     let num2 = 4;

//     assert.equal(num1 + num2, 29, "Not Match");
//   });
// });

// describe("sum and sub test", () => {
//   it("sum test", () => {
//     assert.equal(js.sum(5, 4), 9);
//   });
// });

// describe("test js", () => {
//   it("sum test1", () => {
//     assert.strictEqual(js.sum(3, 3), 6, "Not Match");
//   });
//   it("sub test", () => {
//     assert.equal(js.sub(9, 5), 4, "SUB is not Match");
//   });
// });

// describe("seperator test", () => {
//   it("odd number", () => {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let odd = (number) => number % 2 == 1;
//     js.seperator(numbers, odd, (result) => {
//       assert.deepEqual(result, [1, 3, 5, 7, 9]);
//     });
//   });
// });

// describe("Seperator", () => {
//   it("seperator test", () => {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let odd = (number) => number % 2 == 1;
//     js.seperator(numbers, odd, (result) => {
//       assert.deepEqual(result, [1, 3, 5, 7, 9], "NOT MATCH");
//     });
//   });
// });

// describe("sepEven", () => {
//   it("sepEven test", () => {
//     let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     let even = (num) => num % 2 === 0;
//     js.sepEven(numbers, even, (result) => {
//       assert.deepEqual(result, [2, 4, 6, 8, 10, 12]);
//     });
//   });
// });

// describe("SetTimeOutEven", () => {
//   it("test set time out", (done) => {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let even = (num) => num % 2 === 0;

//     js.evenSetTimeOut(numbers, even, (result) => {
//       assert.deepEqual(result, [2, 4, 6, 8, 10]);
//       done();
//     });
//   });
// });

// describe("promise test title", () => {
//   it("test", () => {
//     let numbers = [1, 2, 3, 4, 5, 6];
//     let odd = (num) => num % 2 == 1;
//     return js.promiseArray(numbers, odd).then((result) => {
//       assert.deepEqual(result, [1, 3, 5]);
//     });
//   });
// });
describe("test odd", () => {
  it("test odd", async () => {
    let numbers = [1, 2, 3, 4, 5];
    let odd = (num) => num % 2 == 1;

    let result = await js.promiseArray(numbers, odd);
    // assert.deepEqual(result, [1, 3, 5]);
    expect(result).to.deep.equal([1, 3, 5]);
  });
});
