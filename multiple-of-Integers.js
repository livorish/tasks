for (var i = 1; i < 101; i++) {
   if ((i % 5 == 0) && (i % 3 == 0)) {
      console.log(`${i} multiple of three and five`);
   } else if (i % 5 == 0) {
      console.log(`${i} multiple of five`);
   } else if (i % 3 == 0) {
      console.log(`${i} multiple of three`);
   } else {
      console.log(`${i}`);
   }
}
