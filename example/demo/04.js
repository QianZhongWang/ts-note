//扩展成类
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new User('QIAN', 'ZW');
console.log(greeter(user));
