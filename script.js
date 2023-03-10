"use strict";
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [222, 30, 50, 'a', 2, 'c', 'f', 1, 't'];

function calculateNum(arr) {
    const numbers = arr.filter(x => !isNaN(x));

    if (numbers.length == 0) {
        return 0;
    }

    let sum = numbers.reduce((prev, curr) => prev + curr);
    return sum / numbers.length;
}

const result = calculateNum(arr)
alert(result);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const x = +prompt('Введіть x');
const y = +prompt('Введіть y');
const znak = prompt('Введіть знак(+, -, *, /, %, ^)');

function doMath(x, znak, y) {
    if (!x && x !== 0 || !y && y !== 0 || !znak) {
        return 'Ви нічого не ввели або ввели невалідні дані!'
    } else {
        switch (znak) {
            case '+':
                return (x + y)
            case '-':
                return (x - y)
            case '*':
                return (x * y)
            case '/':
                return (x / y)
            case '%':
                return (x % y)
            case '^':
                return (x ** y)
            default:
                return 'Не знаю такий знак'
        }
    }
}

const newResult = doMath(x, znak, y);
alert(newResult)

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function userArr() {
    let array = [];

    const mainArr = +prompt("Введіть кількість массивів в головному масиві");

    if (!mainArr || mainArr < 0) {
        return 'error'
    }

    for (let i = 0; i < mainArr; i++) {
        const subArr = prompt(`Введіть через пробіл елементи у ${i + 1} масиві`).split(' ');
        if (!subArr || subArr < 0) {
            return 'error'
        }
        array[i] = subArr
    }
    return array
}

const userData = userArr();
alert(userData);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const str = prompt('Введіть рядок');
const toRemove = prompt('Введіть через пробіл два символи, які б ви хотіли прибрати');

function removeEl(str, toRemove) {
    if (!str || !toRemove) {
        return 'error'
    }
    const toRemoveStr = str.split('');
    const toRemoveArr = toRemove.split(' ');

    if (toRemoveArr.length === 2 && toRemoveStr.includes(toRemoveArr[0] && toRemoveArr[1])) {
        return toRemoveStr.filter(el => el !== toRemoveArr[0] && el !== toRemoveArr[1]).join('')
    }
    return 'error'
}

const removed = removeEl(str, toRemove)
alert(removed)