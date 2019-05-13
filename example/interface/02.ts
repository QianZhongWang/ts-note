//可选属性
interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function crateSquare(config: SquareConfig): Square {
  let newSquare = { color: "white", area: 100 };
  config.color ? (newSquare.color = config.color) : "";
  config.width ? (newSquare.area = Math.pow(config.width, 2)) : "";
  return newSquare;
}

let mySquare = crateSquare({ color: "balck", width: 6 });

console.log(mySquare);

//只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 }; 
