//布尔值
let isDone: boolean = true

//数字
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

//字符串
let myName: string = 'jack'
let age: number = 24
let sentence = `hello , my name is ${name}


I'll be ${age + 1} year old next month`

//数组(两种方法)
let list: number[] = [1, 2, 3, 4]//数字数组
let list1: Array<number> = [1, 2, 3, 4]


//元祖 Tuple (已知数据 的长度和数据的类型 

let x: [string, number]
x = ['hello', 24]

//any数据类型
let notSure: any = 4
notSure = 'may be a string'
notSure = false

let listAny: any[] = [1, true, 'any']

//void没有任何类型
function warnUser(): void {
    console.log('This is my waring message')
}

//nerver类型
function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('something failed')
}


//object类型

declare function create(o: object | null): void;

create({ prop: 0 })
create(null)

//类型断言
let someValue: any = 'this is a string'
let stringLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length   //(推荐使用)






