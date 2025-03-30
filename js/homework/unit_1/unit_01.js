// Task 2
let num = 2;
let str = "февраль";

console.log(`Task 2. 
Месяц, в котором я родилась: ${num}, т.е.- ${str}.`);

// Task 3
let a = "Добро";
let b = "пожаловать";
let c = "на курс";

console.log('Task 3. "' + a + " " + b + " " + c + '"');
console.log(`Task 3. '${a} '+' ${b} '+' ${c}'`);

// Task 4
// let num1 = 2019;

// alert(`Task 4. Выведено число: ${num1}`);

// Task 5
let num2 = 2019;
let num3 = 200;

let res = num2 - num3;

console.log(`Task 5. ${num2} - ${num3} = ${res}`);

// Task 6
let str1 = "Hello";
let str2 = "World!";

document.getElementById("six").innerHTML = `<strong>${str1} ${str2}</strong>`;

// Task 7
let num4 = 12;
let num5 = 12;

let res1 = num4 * num5;

let id7 = (document.getElementById(
  "seven"
).innerHTML = `<strong>12 * 12 = ${res1}</strong>`);

// Task 8
let str3 = "task";
let num6 = 8;

document.querySelector(".out-8").innerHTML = `<strong>${str3}-${num6}</strong>`;

// Task 9
let newSpan = "world";

document.querySelector(".out-9").innerHTML = `${newSpan}`;

// Task 10

let newTitle = "Hi!";

document.querySelector(".out-10").innerHTML = `<h2>${newTitle}</h2>`;

// Task 11
let newElement = "123";
let newElement1 = "456";

let divElement = (document.querySelector(
  ".out-11"
).innerHTML = `${newElement}`);

divElement = document.querySelector(".out-11").innerHTML += `${newElement1}`;

// Task 12
let a1 = document.querySelector(".out-12");
let pi = 3.1415;

a1.innerHTML = `${pi}`;

// Task 13
let a2 = document.querySelector(".out-13");

a2.innerHTML = `'<img src="https://itgid.info/img/js20/js20_unit_01.png" alt="js">'`;

// Task 14
let z1 = 6;
let z2 = 3;

let res2 = z1 * z2;

document.querySelector(".out-14").innerHTML = `${res2}`;

// Task 15
let y1 = 6;
let y2 = 3;

let res3 = y1 / y2;

document.querySelector(".out-15").innerHTML = `${res3}`;

// Task 16
let x1 = "Hello";
let x2 = 5;

let res4 = x1 + x2;

document.querySelector(".out-16").innerHTML = `${res4}`;

// Task 17
let out17 = document.querySelector(".out-17");

console.log(out17);

// Task 18
let out18 = document.querySelector(".out-18");
console.log(out18);

out18 = 5;
console.log(out18);

// Task 19
let out19 = document.querySelector(".out-19");
console.log(out19);

out19 = document.querySelector(".out-19-test");
console.log(out19);

// Task 20
let newWord = "Hi!";

let out20 = (document.querySelector(
  ".out-20"
).textContent = `<h2>${newWord}</h2>`);
