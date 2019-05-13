//添加接口
interface Person {
    firstName: string
    lastName: string
}


function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`
}
let user:Person = {
    firstName:'QIAN',
    lastName:'ZW'
};

console.log(greeter(user))