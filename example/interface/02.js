function crateSquare(config) {
    var newSquare = { color: "white", area: 100 };
    config.color ? (newSquare.color = config.color) : "";
    config.width ? (newSquare.area = Math.pow(config.width, 2)) : "";
    return newSquare;
}
var mySquare = crateSquare({ color: 'balck', width: 6 });
console.log(mySquare);
