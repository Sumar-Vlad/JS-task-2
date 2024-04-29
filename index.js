'use strict'


//1. Вивід парних чисел циклом for

let value = Number(prompt("Введіть число"));

if (isNaN (value)) {
    console.log ("Помилка: введіть число");
} else { 
    for (let i = 2; i < value; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}   

//1. Вивід парних чисел циклом while

// let value = Number(prompt("Введіть число"));

// if (isNaN (value)) {
//     console.log ("Помилка: введіть число");
// } else {
//     let i = 2;
//     while (i < value) {
//         if (i % 2 === 0) {
//         console.log(i);
//         }
//         i++;
//     }
// }

//2. Задача FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }      
// }

//3. Додаткова задача*
    
// let start = "42559125";
// let finish = "";


// for (let i = 0; i < start.length; i++) {
//     if (parseInt(start[i]) < 5) {
//         finish += '0';
//     } else {
//         finish += '1';
//     } 
// }
// console.log(finish)

// if ((start.includes('1')||start.includes('2')||start.includes('3')||start.includes('4'))||(start.includes('5')||start.includes('6')||start.includes('7')||start.includes('8')||start.includes('9'))) {
//     finish = start.replace(/1/g,'0') .replace(/2/g,'0') .replace(/3/g,'0') .replace(/4/g,'0') .replace(/5/g,'1') .replace(/6/g,'1') .replace(/7/g,'1') .replace(/8/g,'1') .replace(/9/g,'1');
// }
// console.log(finish)
