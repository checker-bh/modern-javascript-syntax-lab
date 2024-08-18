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
