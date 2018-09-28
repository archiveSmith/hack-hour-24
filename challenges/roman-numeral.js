/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */
const obj ={
'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1
}
function romanNumeral(n) {
  let result='';
//   if(obj[n]){return obj[n]}
  for (let key in obj) {
    while(n>=obj[key]){
      result = result.concat(key);
      n -= obj[key];
    }
  }
  return result
}
console.log(romanNumeral(8))

function test(n) {
  let obj = {50:'xl',40:'x',10:'x',9:'ix',5:'v',4:'iv', 1:'i'};
  let keys = Object.keys(obj);
  console.log(keys)
  let result = '';
  for (let i=keys.length-1;i>=0;i--) {
     console.log(keys[i])
    if(n>=keys[i]){  
      while(n>=keys[i]){
        console.log(keys[i])
        let mo = n%keys[i];
        console.log((n-mo)/(keys[i]))
        result = result.concat((obj[keys[i]]).repeat((n-mo)/(keys[i])));
        n = mo;
        }
    }
  }
  return result;
}
console.log(test(44))

module.exports = romanNumeral;
