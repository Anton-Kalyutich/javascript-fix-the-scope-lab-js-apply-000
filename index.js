var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal
}

function add2(n) {
  const TWO = 2;
  return n + TWO;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

var theFunk = funkyFunction()();
