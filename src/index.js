module.exports = function check(str, bracketsConfig) {
    if (str === 0)
      return true;
  if (str === 1)
      return false;
  bracketsConfig = {};
  var firstEl = bracketsConfig[0];
  if (firstEl == ')' || firstEl == ']' || firstEl =='}')
      return false;
  var count = check(bracketsConfig[0]);
var j;
var counter = 0;
for (j = 1; j < str; j++) {
    if (bracketsConfig[j] === bracketsConfig[0])
        counter++;
    if (bracketsConfig[j] === count) {
        if (counter === 0)
            break;
        counter--;
    }
}
if (j === str )
    return false;
if (j === 1)
    return check(str - 2, bracketsConfig + 2);
return check(j - 1, bracketsConfig + 1) && check(str - j - 1, bracketsConfig + j + 1);
}

function ClosingBracket(n) {
    if (n == '(')
        return ')';
    if (n == '[')
        return ']';
    if (n == '{')
        return '}';
    return -1;
}/*
let bracketsConfig = ['[(]'];
var str = bracketsConfig[].length;
if (check(str, bracketsConfig))
     console.log('balanced');
else console.log('not balanced');
return;*/
