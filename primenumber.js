function isPrime(num) {
   var i = 2;
   while ((i * i <= num) && (num % 2 != 0)) {
      i++;
   }
   return i * i > num;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(6));
console.log(isPrime(127));
