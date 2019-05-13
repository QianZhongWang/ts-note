// //函数类型的接口
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// //可索引
// interface StringArray {
//   [index: number]: string;
// }
// let myArray:StringArray
// myArray = ['Bob','Freed']

// let myStr:string = myArray[0]
// console.log(myStr)

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}
interface NotOkey{
    [x:number]:Animal
}
