/**
 * With the apply() method, you can write a method that can be used on different objects.
 * The apply() method is similar to the call() method.
 * The difference is:
 *  + The call() method takes arguments separately.
 *  + The apply() method takes arguments as an array.
 */
const apply_person = {
   firstName: " ",
   lastName: " ",
   fullName: function () {
      console.log("Hello " + this.firstName + " " + this.lastName);
   },
};
const apply_person_1 = {
   firstName: "Nguyen Dinh",
   lastName: "Trong",
};
apply_person.fullName.apply(apply_person_1);

//The apply() method accepts arguments in an array:
const apply_person_2 = {
   firstName: " ",
   lastName : " ",
   fullName: function (city: string, country: string) {
      console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country)
   },
};
const apply_person_3 = {
   firstName: "Nguyen Dinh",
   lastName: "Trong",
};
apply_person_2.fullName.apply(apply_person_3, ["Thanh Tri", "Ha Noi"]);

/**
 * You can find the largest number (in a list of numbers) using the Math.max() method.
 * Since JS arrays don't have max() method, you can apply the Math.max() method instead.
 */
console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max.apply(Math, [1, 2, 3]));
console.log(Math.max.apply(" ", [1, 2, 3]));
console.log(Math.max.apply(0, [1, 2, 3]));