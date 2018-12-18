// without for/while loop
function weekend(day) {
   date = new Date(day);
   let message = '';
   const numberOfDay = date.getUTCDay();
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   if (numberOfDay === 0 || numberOfDay === 6) {
      message += `Hooray!Today is ${days[numberOfDay]}! Stay at home or go to out`;
      console.log(message);
   } else {
      message += `Sorry, buddy! But today is not the weekend. Go to work.`;
      console.log(message);
   }

}
