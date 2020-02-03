String.prototype.setAtTheEnd = function (word) {
  return `${this.replace(word, "")} ${word}`
};

console.log("Wykorzystnie w zdaniu natywnej metody".setAtTheEnd("natywnej"));