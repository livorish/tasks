const random = Math.floor(Math.random() * 9 + 1);
const num = Number(prompt('Guess the number! Enter your number: ' ));
if(random === num) {
	console.log('You gessed the number!');
} else {
	console.log('You didn\'t guess the number!');
	console.log(random);
}
