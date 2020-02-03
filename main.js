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