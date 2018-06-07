// Задание 1
let input = [5, 20, 40, 55, 9], x = 18;

//Перебираем массив, вычитая из нужного числа каждый элемент массива
let newInput = input.map(item => Math.abs(x - item));

//Индекс минимального числа в созданном массиве
let indexOfClosestNumber = newInput.indexOf(Math.min(...newInput));
console.log(`Задание 1: Индекс максимально близкого числа: ${indexOfClosestNumber}`);

// Задание 2
//Функция в функции. Замыкание
const plus = num1 => num2 => num1 + num2;
let sum = plus(2)(3);
console.log(`Задание 2: plus(2)(3) = ${sum}`);

// Задание 3
let str = '<b data-count="4"><i data-sum="5"></i></b>';
newStr = str.replace(/\d/g, (num) => num*3);
console.log(`Задание 3: ${str}`);
console.log(newStr);

// Задание 4
let quoteText = `Допустим, вы написали рассказ. Диалог: 'и везде для обозначения диалогов использовали одинарные кавычки'. Теперь вы хотите заменить кавычки диалогов на двойные, и оставить одинарные в сокращениях слов типа aren't.`
// Заменяет там, где нет продолжения слова...
let newQuoteText = quoteText.replace(/^'|([: \s])'|'([. ! ?])|'$/g, '$1"$2');
console.log(`Задание 4: ${quoteText}`);
console.log(newQuoteText);

