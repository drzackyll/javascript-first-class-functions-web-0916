function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction(){
  return function namedFunction(){
    var a = 0
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    var a = 1
  }
}
