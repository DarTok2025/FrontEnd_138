// Типи даних:

// Примітивні
// number:
const num = 22.99;
console.log(num);

// string:
const str = "Dasha";
const str2 = "Dasha 'Hello!'";
const str3 = `Dasha "Hello" 'hi'`;

// boolean: (бульові)
let bool = true;
// або
let bool = false;
//0; undefined;null;NaN
// Наприклад:
console.log(Boolean(0));
console.log("пуста строка: " + Boolean(""));

//undefined - перевірка даних. є змінна, але в ній нічого немає
let un;
//null - змінної не існує взагалі, виглядає як помилка в консолі

console.log(un);
console.log(un2);

console.log(typeof dasha);

//object

//symbol

//Непримітивні:
//object
let arr = ["Apple", "Android", "Lenovo"]; // масив. Це колекція чогось з цифрами на початку

let obj = {}; //об'єкт. Це властивості зключем розгортання на початку
let Apple = {
  brand: "Apple",
  price: 2000,
};

//function
function log(params) {
  console.log("Do you see:" + par);
}
