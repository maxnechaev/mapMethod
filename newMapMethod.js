var words = ["ground", "control", "to", "major", "tom"];

function map(arr, myFct) {
  var outputArr = [];
  for (var i = 0; i < arr.length; i++) {
    outputArr.push(myFct(arr[i]));
  }
  return outputArr;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));
