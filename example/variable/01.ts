function f() {
  var message = "hello world";
  return message;
}

function f1() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

function f3(shouldIntialize) {
  if (shouldIntialize) {
    var x = 10;
  }
  return x;
}
f3(true);
f3(false);

function sunMatrix(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var j = 0; j < currentRow.length; j++) {
      sum += currentRow[j];
    }
  }
}
