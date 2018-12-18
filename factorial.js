function factorial(n) {
   let factor = 1;
   for (var i = 2; i <= n; i++) {
      factor *= i;
   }
   return factor;
}

console.log(factorial(5));
console.log(factorial(4));
