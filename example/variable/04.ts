//扩展
let first = [1, 2];
let second = [3, 4];
let bothplus = [0, ...first, ...second, 5];
console.log(bothplus);

//对象
let defauts = {
  food: "spicy",
  price: "$10",
  ambiance: "noisy"
};
let search = { ...defauts, food: "rich" };
console.log(search)