/ * A simple random password generator * /

//1. Creating arrays with different symbols

const symbolsLower = ('abcdefghijklmnopqrstuvwxyz').split('');
const symbolsUpper = ('abcdefghijklmnopqrstuvwxyz').toUpperCase().split('');
const symbolsNumbersAnd = ('0&?1(2_$@*34)5!6^7%8+9').split('');
const allsymbols = symbolsLower.concat(symbolsUpper, symbolsNumbersAnd);

//1. Creating random number 
//2. Creating an empty string
//4. The creation of a cycle of eleven iteration
//4. Adding characters to string

function generateRandomPassword(arr) {

   let newPass = '';
   let pass;
   for (var i = 0; i < 12; i++) {
      pass = Math.floor(Math.random() * arr.length);
      newPass += arr[pass];
   }

   return newPass;

}

console.log(`your new password: ${generateRandomPassword(allsymbols)}`);
