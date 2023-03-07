// // Задание 2
// // 1)Задать объект с полем name.
// // Задать переменную, которая будет хранить JSON упомянутого объекта.
// // Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// // 2)Создать переменную user, в которой хранится объект.
// // Записать переменную в localStorage.
// // Создать переменную newUser, в которой будет храниться JS объект из localStorage.


let obj = {
    name: "Olga",
};
let jsonObg = JSON.stringify(obj);
let parsObg = JSON.parse(jsonObg);
console.log("jsonObg: ", jsonObg);
console.log("parsObg: ", parsObg);


let user = {
    name: "Ivan",
    age: 29,
};
localStorage.setItem("key", JSON.stringify(user));
let newUser = JSON.parse(localStorage.getItem("key"));

console.log("newUser: ", newUser);