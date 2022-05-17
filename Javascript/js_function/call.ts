/**
 * The call() method can be used to invoke (call) a method with an owner object as an argument (parameter).
 * With call(), an object can use a method belonging to another object.
 */
var person = {
    firstName: " ",
    lastName : " ",
    fullName: function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    },
};
const person1 = {
    firstName: "Trong",
    lastName: "Nguyen",
};
const person2 = {
    firstName: "Hung",
    lastName: "Nguyen",
};
person.fullName.call(person1);
person.fullName.call(person2);

// The call() method can accept arguments:
const person3 = {
    firstName: " ",
    lastName : " ",
    fullName: function (city: string, country: string) {
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country)
    },
};
person3.fullName.call(person1, "Thanh Tri", "Ha Noi");