
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




let numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');



const pesonalMovieDB = {
	count: numberOffilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


let a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', '');
// c = prompt('Один из последних просмотренных фильмов?', ''),
// d = prompt('На сколько оцените его?', '');


pesonalMovieDB.movies[a] = b;
// pesonalMovieDB.movies[c] = d;





console.log(pesonalMovieDB)