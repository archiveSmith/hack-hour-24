// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const splitz = str.split(/([^a-zA-Z])/gi);
  const stack = [];
  for (let i=0; i<splitz.length; i++) {
    if (stack[0] && stack[stack.length-1].toUpperCase() === splitz[i].toUpperCase().split('').reverse().join('')) {
      stack.pop();
    } else if (/[a-zA-Z]/g.test(splitz[i])) {
      stack.push(splitz[i]);
    } 
  }
  return stack[0] ? false : true;
}

console.log(matchWord(''));

module.exports = matchWord;
