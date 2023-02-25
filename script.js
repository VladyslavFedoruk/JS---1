//Способ подключения №2 и и использование js - внешний 
let MYLET = 'John';
console.log(MYLET);

//Мінімум Пункт - 2
//Корректные переменные
let variable = 'Mikhail';
let var7 = 'Alex';
let var_var = 'phill';
let varVar = 7;
let VARVAR = true;
let $ = true;

// //Корректные переменные
// let 8i = 'Mikhail';
// let test-test = 'Vlad';
// let let = 'Mikhail';
// const const = 7;



//Мінімум Пункт - 3 виды комментариев
// - однострочный

/*  - многострочный
многострочный
многострочный
многострочный
многострочный
*/

//Мінімум Пункт - 4 виды именования переменных
// 1) kebab-case — слова разделяются дефисом (my-var)
// 2) snake_case — нижнее подчеркивание между словами (my_let)
// 3) CamelCase — каждое новое слово в переменной пишется с заглавной буквы (MyLet)
// 4) lowerCamelCase — аждое новое слово в переменной пишется с заглавной буквы, кроме первого (myLetMyVar)

// Уровень Норма Пункт - 1
let name = prompt('Привіт, як тебе звати?');

alert('Привіт, ' + name);


// Уровень Норма Пункт - 2
let YearsOld = prompt('Привіт, якого ти року народження');
const currentYear = 2023;
alert(currentYear - YearsOld);

// Уровень Норма Пункт - 3
let square = prompt('Привіт, давай вирішимо задачку та дізнаємося периметр квадрата');
alert(square * 4);

//Уровень Максимум - Пункт 1
let radius = prompt('А тепер вирахуємо радіус кола(Введи цифру)')
let number = Math.PI * radius ** 2;
alert(number);

//Уровень Максимум - Пункт 2
let distance = prompt ('А давай підрахуємо вістань між містами? Введи відстань в км(цифру)')
let time = prompt ('А тепер введи, за скільки хочете дістатися(цифру)')
let speed = distance / time;
alert(speed);


//Уровень Максимум - Пункт 3 - конвертатор
let Dollars = prompt('Введи сумму в долларах, сколько хочешь конвертировать(У айтишников зарплата в долларах, щас узнаем сколько ты зарабатываешь)')
const curse = 0.9;
let Euro = Dollars * curse;
alert(Euro);


