let input: [number, number] = [1, 2];
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f(input);

let [first, ...reset] = [1, 2, 3, 4];
console.log(first)
console.log(reset)