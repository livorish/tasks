function factorial(n) {
   if (n == 1) {
      return 1;
   } else if (n == 2) {
      return 2;
   } else {
      return n * factorial(n - 1);
   }

}

console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(4));
