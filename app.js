// Exercise 0: Using Array.prototype.map()
const array1 = ['vanilla', 'chocolate', 'strawberry'];
const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});
console.log("Ex0 : "+array2); // Logs: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Exercise 1: Applying Array.prototype.map()
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const nums2 = nums.map((elem) => {
  return elem * 2;
});
console.log("Ex1 : "+nums2); // Logs: [26, 174, 4, 178, 24, 8, 180, 126]


// Exercise 2: Array destructuring
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
console.log("Ex2 :  the First : "+pizzaToppings[0]+ " ,,,The second : "+pizzaToppings[1] ); // Logs: Pineapple, Olives

// Exercise 3: Destructuring objects
const car = {
  make: 'Audi',
  model: 'q5',
};
console.log("Ex3 : "+ car.make + " and " +car.model ) // Logs: Audi and q5

// Exercise 4: Applying the spread operator on arrays
const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings2];
console.log("Ex4 : "+ controversialPizzaToppings); // Logs: ['Pineapple', 'Olives', 'Anchovies']

// Exercise 5: Applying the spread operator on objects
const car2 = {
  make: 'Audi',
  model: 'q5',
};
const myCar = {...car2};
myCar.make = 'Toyota';
myCar.model = 'q7';
console.log("Ex5 : "+myCar.make +" And "+ myCar.model ) // Logs: Toyota And q7

// Exercise 6: Dynamic keys in objects
const userProfile = {};
const propertyName = "username";
userProfile[propertyName] = "Ahmed";
console.log("Ex6 : ");
console.log(userProfile); // Logs: { username: 'Ahmed' }

// Exercise 8: Default parameters
const fun = (noun = 'cat', adjective = 'white') => {
  return "The "+noun +" is "+adjective;
};
console.log("Ex8 : ");
console.log(fun()); // Logs: The cat is white.

// Exercise 9: Ternary operator
let pizza = 'tasty' ? "yum" : "yuck";
console.log("Ex9 : "+ pizza); // Logs: yum

// Exercise 10: Boolean gates
const localLangConfig = "ar";
const LANG = localLangConfig || 'en';
console.log("Ex10 : ");
console.log('Language setting:', LANG); // Logs: Language setting: ar

const userSavedTheme = 'dark';
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME); // Logs: User theme setting: dark

// Exercise 11: Optional chaining
const adventurer = {
  name: 'Alice',
};
let cat = adventurer.age?.name;
console.log(cat); // Logs: undefined