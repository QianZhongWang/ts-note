var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a;
console.log(a, "变量a");
console.log(o, "全局变量o");
var newValue = o.a, rest = __rest(o, ["a"]);
console.log(newValue, "变量b");
console.log(rest);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a);
    console.log(b);
}
keepWholeObject({ a: "string", b: 23 });
