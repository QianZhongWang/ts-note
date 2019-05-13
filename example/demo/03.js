function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'QIAN',
    lastName: 'ZW'
};
console.log(greeter(user));
