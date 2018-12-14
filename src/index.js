/* //  1 HOISTING

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log("inner", i);
  }
  console.log("outer", i);
}

sayHello();

// function sayHello2() {
//   for (let i = 0; i < 5; i++) {
//     console.log("inner", i);
//   }
//     console.log("outer", i);
// }

// sayHello2();
 */

/* // 2 VAR LET CONST

let a = 1;

const b = 2;
// b = 3;
// console.log(b)

const c = [1, 2, 3];
// c.push(4);
// console.log(c);

const d = { user: "lo", age: 40 };
// d.user = "li";
// d.gender = "male";
// d = "nooo";
// console.log(d); */

/* // OBJECTS

const person = {
  name: "lo",
  walk: function() {
    return this.name + " is walking";
  },
  talk() {
    return `${this.name} says Hello`;
  },

  that() {
    return this;
  }
};

// console.log(person.walk());
// console.log(person.talk());

// console.log(person.that());

// const me = person.that;

// console.log(me());

// const me = person.that.bind(person);

// console.log(me()); */

// ++++++++++++++++++++++++++++++++++++++++++++++
/* // FUNCTIONS

const square = function(nb) {
  return nb * nb;
};

console.log(square(10));

// now use the fat arrow function
const square2 = nb => nb * nb;
console.log(square2(10));


// const person = {
//   name: "lo",
//   talk() {
//     setTimeout(function() {
//       console.log(`${this.name} says hello`);
//     }, 1000);
//   }
// };
// const person = {
//   name: "lo",
//   talk() {
//     const that = this;
//     setTimeout(function() {
//       console.log(`${that.name} says hello`);
//     }, 1000);
//   }
// };
// const person = {
//   name: "lo",
//   talk() {
//     setTimeout(() => {
//       console.log(`${this.name} says hello`);
//     }, 1000);
//   }
// };

// person.talk();
 */

/* // DESTRUCTURING

// const address = {
//   street: "4 allée verte",
//   city: "Paris",
//   country: "France"
// };

// const { city } = address;
// console.log(city);

// const { country: pays, street } = address;
// console.log(pays);
// console.log(street);
 */

/* //  SPREAD

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// console.log(combined);

// const combined = [...first, ...second];
// const combined = [...first, "cake is a lie", ...second];
// console.log(combined);

// const first = { name: "lo" };
// const second = { job: "front dev" };

// const user = { ...first, ...second };
// console.log(user);
// const clone = { ...user };
// console.log(clone); */

/* // CLASS

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     return `${this.name} is walking`;
//   }
// }
// const lo = new Person("lo");
// console.log(lo);
// console.log(lo.walk());

// class Teacher extends Person {
//   teach() {
//     console.log("Expellarium");
//   }
// }
// console.log(Snape.name);

// class Teacher extends Person {
//   constructor(name, degree = 1) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     return "Expellarium !!!";
//   }
// }
// const Snape = new Teacher("Snape", 2);
// console.log(Snape.name);
// console.log(Snape.degree);
// console.log(Snape.teach());
 */

/* // ASYNC AWAIT FOR PROMISES
// const cookEgg = egg =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (egg === "egg") {
//         resolve("your egg is ready");
//       } else {
//         reject("nothing to cook");
//       }
//     }, 1000);
//   });

// cookEgg("egg")
//   .then(result => console.log(result))
//   .catch(ex => console.error(ex));

// const cookEgg2 = async egg => {
//   try {
//     const myEgg = await cookEgg(egg);
//     console.log(myEgg);
//   } catch (err) {
//     console.log(err);
//   }
// };

// cookEgg2("egsdf"); */

/* // MODULES
// import { Teacher } from "./teacher";

// Default => import ... from './'
// Named => import {...} from './'
// with default set for the export
// import Teacher from "./teacher";
// import Teacher, { promote } from "./teacher";

// const Snape = new Teacher("Snape", 2);

// console.log(Snape.teach());
// console.log(promote()); */
