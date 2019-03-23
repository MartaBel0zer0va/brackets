module.exports = function check(str, bracketsConfig) {
  if (str == 0)
      return true;
  if (str == 1)
      return false;
  if (bracketsConfig[0] == ')' || bracketsConfig[0] == ']' || bracketsConfig[0] =='}')
      return false;
  var count = check(bracketsConfig[0]);
var j;
var counter = 0;

if (j == str )
    return false;
if (j == 1)
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
}
