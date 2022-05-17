/**
 * With the bind() method, an object can borrow a method from another object.
 */
 const bind_person = {
    firstName: "Nguyen Duc",
    lastName: "Hung",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
};

const bind_member = {
    firstName: "Nguyen",
    lastName: "Dinh Trong",
};

// The member object borrows the fullname method from the person object
let fullName = bind_person.fullName.bind(bind_member);

// Sometimes the bind() method has to be used to prevent loosing "this".
const bind_person_1 = {
    firstName: "Nguyen",
    lastName: "Dinh Trong",
    display: function () {
        let x = document.getElementById("demo-bind-2");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};
bind_person_1.display();
const bind_person_2 = {
    firstName: "Nguyen",
    lastName: "Dinh Trong",
    display: function () {
        let x = document.getElementById("demo-bind-3");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};
setTimeout(bind_person_2.display, 3000);

// When a function is used as a callback, "this" is lost.
const bind_person_3 = {
    firstName: "Nguyen",
    lastName: "Dinh Trong",
    display: function () {
        let x = document.getElementById("demo-bind-4");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};
let display = bind_person_3.display.bind(bind_person_3);
setTimeout(display, 3000);