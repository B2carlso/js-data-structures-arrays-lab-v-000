const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  return drivers.shift(name);
}

function appendDriver(name){
  const appendDriver = [...drivers, name];
  return appendDriver
}

function prependDriver(name){
  const prependDriver = [name, ...drivers]
  return prependDriver
}

function removeLastDriver(name){
  const removeLastDriver = [...drivers]
  removeLastDriver.slice(0, removeLastDriver.length - 1)
  return removeLastDriver
}
