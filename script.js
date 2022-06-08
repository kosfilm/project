
"use strict";

// const result = confirm('Are you ok?');
// console.log(result);


// const answer = prompt('You have 18 yer old', '');
// console.log(typeof (answer + 5));

// const answers = [];

// answers[0] = prompt('What is your first name', "");
// answers[1] = prompt('What is your last name', "");
// answers[2] = prompt('What many yers old you have', "");

// console.log(typeof (answers));
// console.log(typeof (null));

// document.write(answers);



// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Hello ${user}`);



// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
// 	decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(9 % 2 == 0);

// console.log(2 * 4 === '8');
// console.log(2 * 4 === 8);

// console.log(2 + 2 * 2 !== '8');

// &&  и
// || или

// const isChecked = false,
// 	isClose = false;

// console.log(isChecked || !isClose);




// let numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const pesonalMovieDB = {
// 	count: numberOffilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// let a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', '');

// pesonalMovieDB.movies[a] = b;
// // pesonalMovieDB.movies[c] = d;


// console.log(pesonalMovieDB)




// if (4 == 9) {
// 	console.log('work');
// }
// else {
// 	console.log('not work');
// }

// let num = 56;

// switch (num) {
// 	case 55:
// 		console.log('55')
// 		break;
// 	case 40:
// 		console.log('55')
// 		break;
// 	default:
// 		console.log('not')
// 		break;

// }


// const hamburger = 3;
// const fries = 1;
// const cola = 1;


// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('I have food');
// }
// else {
// 	console.log('I dont have food');
// }
// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'gfbfgngf');


// ========================= 015 (д) Логические операторы

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
// 	console.log('I have food');
// }
// else {
// 	console.log('I dont have food');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// let johnReport, alexReport, semReport, mariaReport = 'done';

// console.log(johnReport || alexReport || semReport || mariaReport);


// console.log(!0);



//================================== 016 Циклы

// let num = 50;

// while (num <= 55) {
// 	console.log(num)
// 	num++
// }

// do {
// 	console.log(num)
// 	num++
// }
// while (num <= 55)

// for (let i = 1; i < 10; i++) {
// 	if (i == 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i)
// }



// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level ${i}`);

// 	for (let j = 0; j < 3; j++) {
// 		console.log(`First level ${j}`);

// 		for (let k = 0; k < 5; k++) {

// 			if (k === 2) break first;
// 			console.log(`Third level ${k}`);

// 		}
// 	}
// }

// console.log(result);




// ДЗ урок ======= 018 script.js


// let numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB = {
// 	count: numberOffilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// }
// let i = 0;
// do {
// 	i++
// 	let a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personalMovieDB[a] = b;
// 		console.log('Done');
// 	}
// 	else {
// 		console.log('Error');
// 		i--;
// 	}
// }
// while (i < 2)


// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов")
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель")
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман")
// } else {
// 	console.log("Произошла ошибка")
// }


// console.log(personalMovieDB)




// ===================   019 Функции, стрелочные ф-ции (ES6)

// let num = 20;

// function showFirstMassage(text) {
// 	console.log(text);
// 	num = 10;
// }

// showFirstMassage('Hello Svit');

// console.log(num);


// function calc(a, b) {
// 	return a + b;
// }
// console.log(calc(5, 13));
// console.log(calc(5, 3));
// console.log(calc(15, 13));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function () {
// 	console.log('Slava Ukraine');
// };

// logger();

// const calc = (a, b) => a + b;


// const usdCurr = 28;
// const discount = 0.9;

// function convert(usd, amount) {
// 	return usd * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// 	return function () { }
// }
// const res = convert(usdCurr, 500);
// promotion(res);

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i == 3) return;
// 	}
// 	console.log('Done');
// }

// test();

// function doNoting() { }
// console.log(doNoting() === undefined);



let numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const pesonalMovieDB = {
	count: numberOffilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

// let a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', '');

// pesonalMovieDB.movies[a] = b;


function showMyDB(hidden) {
	if (!hidden.privat) console.log(hidden);
}

showMyDB(pesonalMovieDB);

function writeYourGenres(gen) {
	for (let i = 1; i <= 3; i++) {
		gen[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres(pesonalMovieDB.genres);

// ========================== 022 Методы и свойства строк и чисел


