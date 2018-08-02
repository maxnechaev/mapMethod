function map(arr, transformFct) {
  var outputArr = [];
  for (var i = 0; i < arr.length; i++) {
    outputArr.push(transformFct(arr[i]));
  }
  return outputArr;
}

console.log(map([1, 5, 6, 7], function(nb) {
  return nb * 2;
})); //double
console.log(map([1, 5, 6, 7], function(nb) {
  return nb * 3;
})); //tripple
console.log(map([1, 5, 6, 7], function(nb) {
  return nb * nb;
})); //square
