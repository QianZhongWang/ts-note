var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//扩展
var first = [1, 2];
var second = [3, 4];
var bothplus = [0].concat(first, second, [5]);
console.log(bothplus);
//对象
var defauts = {
    food: "spicy",
    price: "$10",
    ambiance: "noisy"
};
var search = __assign({}, defauts, { food: "rich" });
console.log(search);
