String.prototype.setAtTheEnd = function (word) {
  return `${this.replace(word, "")} ${word}`
};

console.log("Ala ma kota Bzika".setAtTheEnd("kota"));