let myFunctions = {};

myFunctions.hello = function(){
  return "hello";
}

myFunctions.arrayTimesTen = function(array) {
  let multiplied = [];
  for (num of array) {
    multiplied.push(num * 10);
    
  }
  return multiplied;
}

module.exports = myFunctions;
