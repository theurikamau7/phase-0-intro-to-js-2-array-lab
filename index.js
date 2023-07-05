// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  console.log(cats);
  
  destructivelyAppendCat("Ralph");
  console.log(cats);

cats.length = 3;
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

console.log(cats);

destructivelyPrependCat("Bob");
console.log(cats);

cats.shift();
console.log(cats);

function destructivelyRemoveLastCat() {
    return cats.pop();
}

console.log(cats);

const removedLastCat = destructivelyRemoveLastCat();
console.log(removedLastCat);

cats.push(removedLastCat);
console.log(cats);

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

console.log(cats);

const removedFirstCat = destructivelyRemoveFirstCat();
console.log(removedFirstCat);

cats.unshift(removedFirstCat);
console.log(cats);

function prependCat(array, name) {
    return [name, ...array];
}
  
const newerCats = prependCat(cats, "Arnold");
console.log(cats);
console.log(newerCats);


function appendCat(array, name) {
  return array.concat(name);
}

const newCats = appendCat(cats, "Broom");
console.log(cats);
console.log(newCats);

function removeLastCat(array) {
    return array.slice(0, -1);
}
  
const removedGarfield = removeLastCat(cats);
console.log(cats);
console.log(removedGarfield);

function removeFirstCat(array) {
    return array.slice(1);
}
  
const removeMilo = removeFirstCat(cats);
console.log(removeMilo);
console.log(cats);