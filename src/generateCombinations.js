// generateCombinations.js
// (C) 2014 splashinn

var letters = ["a", "b", "c", "d"];
var combi = [];
var temp = "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen; i++) {
  temp = "";
  for (var j = 0; j < letters.length; j++) {
    if ((i & Math.pow(2, j))) {
      temp += letters[j]
    }
  }
  if (temp !== "") {
    combi.push(temp);
  }
}
