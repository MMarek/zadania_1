// zad 1

String.prototype.setAtTheEnd = function (word) {
    return `${this.replace(word, "")} ${word}`
};

console.log("Wykorzystnie w zdaniu natywnej metody".setAtTheEnd("natywnej"));

// zad 2

const bubbleSort = (arr) => {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                // let temp = arr[i];
                // arr[i+1] = arr[i];
                // arr[i] = temp;

                // można również zapisać prościej = destrukturyzacja tablic z jednoczesnym przypisaniem do zmiennych

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSorted = false;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([1, 0, 28, 17, 62]));
console.log(bubbleSort([33, 20, 18, 327, 12, 2]));
console.log(bubbleSort([64, 240, 8, 0, 64, -1, -4]));
console.log(bubbleSort([56, -140, -8, 0, 83, -42, 5, -1.6]));

// zad 3

// IIFE - Immediately-invoked function expression =  funkcja samowykonująca się w JavaScript.

const shopModule = (function () {
    const _products = [];

    const _countNewPrice = (price) => {
        return price + (price * 0.5) - 0.1;
    };

    const addProduct = (product) => {
        const newPrice = _countNewPrice(product.price);
        const newProduct = Object.assign({}, product, {price: newPrice});
        _products.push(newProduct);
    };

    const showProducts = () => {
        console.log(_products);
    };

    return {
        addProduct,
        showProducts
    }

})();

const product1 = {
    id: 1,
    name: 'słuchawki',
    price: 200
};

const product2 = {
    id: 2,
    name: 'buty',
    price: 300
};

shopModule.addProduct(product1);
shopModule.addProduct(product2);
shopModule.showProducts();

console.log(product1, product2);

// zad 4

let randomNumber = 21;
let result = Math.floor(randomNumber / 2);

console.log(result);

// zad 5

let sqrtResult = Math.pow(144, 1 / 2);
console.log(sqrtResult);

let sqrtResult2 = Math.pow(361, 1 / 2);
console.log(sqrtResult2);

let sqrtResult3 = Math.pow(3136, 1 / 2);
console.log(sqrtResult3);

// zad 6

let min = 15;
let max = 51;
let number = Math.floor(Math.random() * (max - min + 1) + min);

console.log(number);

// zad 7

const firstValue = '50px';
const secoundValue = '5px';

let num1 = parseInt(firstValue);
console.log(num1); //50

let num2 = parseInt(secoundValue);
console.log(num2); //5

let score = num1 + num2;
console.log(score);

// zad 8

let mail = "mildnermarek@gmail.com";
let position = mail.indexOf("@");

if (position > -1) {
    console.log("to jest email");
} else {
    console.log("to nie jest adres email");
}

// zad 9

let age = prompt("Ile masz lat?");
if (age >= 18) {
    console.log("Jesteś pełnoletni");
} else {
    console.log("Nie jesteś pełnoletni");
}

// zad 10

let grade = prompt("Podaj stopień z ostatniego egzaminu.");
switch (grade) {
    case "6":
        console.log("celujący");
        break;

    case "5":
        console.log("bardzo dobry");
        break;

    case "4":
        console.log("dobry");
        break;

    case "3":
        console.log("dostateczny");
        break;

    case "2":
        console.log("dopuszczalny");
        break;

    case "1":
        console.log("niedopuszczalny");
        break;
    default:
        console.log("nieznana wartość");
}