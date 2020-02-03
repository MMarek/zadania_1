String.prototype.setAtTheEnd = function (word) {
  return `${this.replace(word, "")} ${word}`
};

console.log("Wykożystnie w zdaniu natywnej metody".setAtTheEnd("natywnej"));