var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArray = kittens.concat(`${name}`);
  return newArray;
}
function prependKitten(name) {
  var nameArray = [`${name}`];
  var newArray = nameArray.concat(kittens);
  return newArray;
}

function removeLastKitten(index) {
  var removeGarfield = kittens;
  removeGarfield.slice(0, removeGarfield-length - 1);
  return removeGarfield;
}

