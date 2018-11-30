//1.implementation of Array.prototype.map()

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Add your code below this line

  this.forEach((item) => {
    newArray.push(callback(item));

  })
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function (item) {
  return item * 2;
});


//2. Implementation of filter
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach((item) => {
    if (callback(item)) {
      newArray.push(item);
    }
  })
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});


//3.Implement Array.prototype.reduce
Array.prototype.myReduce = function (callback, initialVal) {
  var acc = (initialVal == undefined) ? undefined : initialVal;
  this.forEach((item) => {
    if (acc !== undefined) {
      acc = callback(acc, item);
    } else {
      acc = item;
    }
  });
  return acc;
}
