let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a } = o;
console.log(a, "变量a");
console.log(o, "全局变量o");
let { a: newValue, ...rest } = o;
console.log(newValue, "变量b");
console.log(rest);

function keepWholeObject(wholeObject: { a: string; b?: number }) {
    let {a,b=1001} = wholeObject
    console.log(a)
    console.log(b)
}
keepWholeObject({a:"string",b:23})
