/*
Primitive Data type
String - "Hello world",'Hello world'
Number - 1, 10.5, 10.44444
Bollean - true or false
undefined
null

------------

Non Primitive Datatype

Object - {
name:"sam"
dob:"10/12/35"
}
Array - [1,3,5,false, 'name',undefined, null, {}, []]

function greet(){
return 'Hello'
}
greet()


-------------
let city = "chennai"; //1111
let city2 = city; //12232
city = "karnataka";
console.log(city);
console.log(city2);

let student = { name: "sam", age: 20 }; //123
let student2 = student; //123
student.name = "george";

console.log(student.name, "student1");
console.log(student2.name, "student2");

var,let,const

var
*/

// var name = "sam";
// console.log(name);
// name = 10;
// name = "kumar";
// console.log(name);

// // console.log(name);
// let city = "chennai";
// city = "banglore";
// console.log(city);

// const sex = "M";
// sex = 10;
// console.log(sex);

//Hoisting only available with var keyword
//
// let j = 11;
// //function scope
// {
//   a = 10;
//   var a;
// }
// console.log(a);
// //block scope
// {
//   let b;
//   b = 10;
//   console.log(j);
//   console.log(b);
// }

// const name = "sam";

// name = "raj";

// const students = {
//   name: "raj",
//   age: 40
// };

// students.name = "geeva";

// console.log(students.name);

// const classStudent = ["sam", "raj", "kumar"];

// classStudent.push("ram");
// console.log(classStudent);

const shopNowBtn = document.getElementById("shopNowBtn");
// console.log(shopNowBtn);
// //Poiting the nav tag
// const mainNav = document.getElementsByClassName("nav");
// console.log(mainNav);
// const navLink = mainNav[0].querySelectorAll(`.nav a`);
// console.log(navLink);
// const anchorTag = document.querySelector(".nav");
// console.log(anchorTag);
// const mainContent = document.querySelector(".main");

// shopNowBtn.innerText = "shopping";

// console.log(shopNowBtn.innerText);

// console.log(mainNav[0].innerHTML);

// console.log(navLink[0].getAttribute("href"));

// // shopNowBtn.setAttribute("disabled", "true");

// console.log((shopNowBtn.style.backgroundColor = "rgb(255, 0, 0)"));

// const products = [
//   {},
//   { name: "Smart Watch", price: "99.99", id: 2 },
//   { name: "Wireless Earbuds", price: "59.99", id: 3 },
//   { name: "Laptop", price: "1299.99", id: 4 },
//   { name: "Tshirt", price: "19.99", id: 5 }
// ];

// const productCard = document.createElement("section");

// productCard.innerHTML = "<h2>Featured Products</h2>";

// productCard.setAttribute("class", "products-section");

// const productGrid = document.createElement("div");

// productGrid.setAttribute("class", "product-grid");

// productGrid.setAttribute("id", "products-container");

// mainContent.appendChild(productCard);

// productCard.appendChild(productGrid);

// for (let i = 0; i < products.length; i++) {
//   console.log(Object.keys(products[i]).length);
//   if (Object.keys(products[i]).length > 0) {
//     console.log(Object.keys(products[i]).length);
//     const productCard = document.createElement("div");
//     productCard.setAttribute("class", "product-card");
//     productCard.setAttribute("data-id", products[i].id);
//     productCard.innerHTML = `
//     <h3>${products[i].name}</h3>
//     <p>Price: $${products[i].price}</p>
//     `;
//     productGrid.appendChild(productCard);
//   }
// }

// const customerReviews = document.createElement("div");
// customerReviews.setAttribute("class", "customer-reviews");
// customerReviews.innerHTML = "<h2>Customer Featured Products</h2>";
// productCard.after(customerReviews);

shopNowBtn.addEventListener("click", function () {
  alert("Shop Now button clicked!");
});

const products = document.querySelectorAll(".product-card");
// const data = [];

// products.forEach((product) => {
//   const id = product.getAttribute("data-id");
//   const name = product.querySelector("h3").innerText;
//   const price = Number(product.querySelector("p:nth-child(3)").innerText);
//   const qty = Number(product.querySelector(".qty").value) || 0;
//   data.push({ id, name, price, qty });
// });
// console.log(data);

console.log(products);
// Number
// Array
// Object
// Boolean
const addedProducts = [1, 2, 4, 5];
console.log(Number("1"));
function getProductInfo(input) {
  console.log(input);
  const card = input.closest(".product-card");
  console.log(card);
  const name = card.dataset.name;
  const price = card.dataset.price;
  const qty = Number(input.value) || 0;
  console.log(card, name, price, qty);

  addedProducts.push({ name, price, qty });
  console.log(card.dataset);
}
console.log(addedProducts);
const emailSubscribe = document.getElementById("emailSubscribe");

emailSubscribe.addEventListener("onchange", function () {
  console.log(this.value);
});
emailSubscribe.addEventListener("keydown", function (event) {
  console.log(event.key === "Enter");
});

const productCart = document.getElementById("product-cart");

productCart.addEventListener("click", function (params) {
  console.log(addedProducts);
});

const addCartBtn = document.getElementById("addCartBtn");

addCartBtn.addEventListener("mouseover", function () {
  addCartBtn.style.color = "red";
});
addCartBtn.addEventListener("mouseout", function () {
  addCartBtn.style.color = "black";
});

//conditional statments

//if, else, elseif,switch

//loops statements
//For,while

//functional statments
//function

// if (color == "red") {
// } else if (color == "blue") {
// } else {
// }

// switch (color) {
//   case "red":
//     console.log("Red color selected");
//     break;
//   case "blue":
//     console.log("Blue color selected");
//     break;
//   case "blue":
//     console.log("Blue color selected");
//     break;
//   case "blue":
//     console.log("Blue color selected");
//     break;
//   default:
//     console.log("Default color selected");
// }
// const num = [10, 11, 2, -1,[1,2,4]];
// num[-2];
// i++ = i = i +1;
// i+=2 = i = i +1
// i = i +2
// i =i+2

// for(){
//   console.log('print')
// }
// for (let i = 1 ) {
//   console.log(i);
// }

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

let i = 1;
while (i <= addedProducts.length) {
  // console.log("from while lop");
  // const product = addedProducts.pop();

  // console.log("Removed product:", product);
  console.log(addedProducts[i]);
  if (i == 2) {
    console.log("Breaking loop at i = 2");
    break;
  }
  i++;
}

let students = [1, 2, 4, 5, 3, 6, 67];
// for (let char of students) {
//   console.log(char);
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// const studenttotal = getTotalMarks(students);
// //function expression
// function getTotalMarks(params) {
//   const totalValue = params.reduce((sum, val) => sum + val, 0);
//   console.log(totalValue, "Total Marks");
//   return totalValue;
// }
// console.log(studenttotal, "Student Total Marks");
// function getInputValue(event) {
//   console.log(event.target.value);
// }

// //function expression
// const greet = function () {
//   console.log("this is from greet function");
// };
// greet();

//Array

// [0, 1, 2, 3, 4, 5] - one dimensional array
// [[], []] - two dimensional array

const student = {
  name: "John",
  age: 20,
  grade: "A"
};

const dtStudent = Object.entries(student);
console.log(dtStudent);
console.log(dtStudent[0][0]); // Logs "name"
console.log(dtStudent[0][1]); // Logs "John"

const numValue = [1, 4, 6, 78, 4, 2, 2]; // one dimensional array

numValue.push(6);
console.log(numValue);
console.log(numValue.length);
console.log(numValue.pop());
const newValues = structuredClone(numValue);

console.log(numValue);
newValues.splice(-1, 0, 10, 12);
console.log(newValues);
console.log(numValue.slice(1, 4));

const doubledValues = numValue.map(function (val, index, array) {
  return val * 2;
});
console.log(doubledValues);
console.log(numValue);

newValues.forEach((value, index) => console.log(value, index));

const filteredValue = newValues.filter((value) => value > 8);
console.log(filteredValue);

const findValue = newValues.find((value, index) => {
  console.log(value, index, "thhis si find");
  return value == 2;
});
console.log(findValue);

console.log([5, 6, 7].every((n) => n > 2));
console.log([5, 6, 7].some((n) => n > 2));
const addVaue = 3;
const totalValue = numValue.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, addVaue);
console.log(totalValue);

const mutiplesOfTwo = [2, 4, 6, 8, 10];

const doubleValues = mutiplesOfTwo
  .map((val) => val * 2)
  .filter((val) => val > 10)
  .reduce((cur, sec) => cur + sec, 0);

//Objects

const studentInfo = {
  name: "John",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  score: [50, 40, 20, 100],
  isPresent: false
};
// 3 3/1,3/2
const studentInfoKeys = Object.keys(studentInfo);
console.log(studentInfoKeys);
console.log(Object.values(studentInfo));
console.log(Object.entries(studentInfo));

console.log(studentInfo.name); // dot notation
console.log(studentInfo["name"]); // square notation

for (let key of studentInfoKeys) {
  console.log(key, studentInfo[key]);
}

const studentsList = [
  {
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78
  },
  {
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95
  },
  {
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70
  }
];

const adminPermission = ["name", "gender"];
const filteredList = studentsList.map((val) => {
  const filteredStudent = {};
  for (let key of adminPermission) {
    filteredStudent[key] = val[key];
  }
  return filteredStudent;
});

console.log(filteredList);

const studentInfo2 = Object.assign({}, studentInfo); // Shallow copy
studentInfo2.grade = "B";
studentInfo2.address.city = "New York";
// console.log(studentInfo, "studentInfo1");
console.log(studentInfo2, "studentInfo2");

//shallow copy and deep copy
const studentInfo2Deep = JSON.parse(JSON.stringify(studentInfo)); // Deep copy
studentInfo2Deep.grade = "C";
studentInfo2Deep.address.city = "Los Angeles";
console.log(studentInfo, "studentInfo1");
console.log(studentInfo2Deep, "studentInfo2Deep");
studentInfo2Deep.score.push(90);

const studentInfo2Deep2 = {
  ...studentInfo,
  score: [...studentInfo.score],
  address: { ...studentInfo.address }
};
studentInfo2Deep2.address.city = "washington";
console.log(studentInfo2Deep2, "studentInfo2Deep2");

const studentInfo2Deep3 = structuredClone(studentInfo); // Deep clone

studentInfo2Deep3.address.city = "nivada";

const studentObjectFreeze = Object.freeze(studentInfo2Deep3); //shallow clone
studentObjectFreeze.gender = "male";
studentObjectFreeze.grade = "C";
studentObjectFreeze.address.street = "1231231";
console.log(studentInfo2Deep3, "studentInfo2Deep3");
console.log(studentObjectFreeze, "studentObjectFreeze");

const studentObjetSeal = Object.seal(structuredClone(studentInfo)); //shallow copy
studentObjetSeal.gender = "male";
studentObjetSeal.grade = "C";
studentObjetSeal.address.street = "1231231";
delete studentInfo.name;
delete studentObjetSeal.name;

console.log(studentObjetSeal, "studentObjetSeal");

//ES6 features

// function getName(a, b) {
//   return a + b;
// }

const getName = (a, b) => a + b;

const name = "abram";

console.log("Welcome " + name + ", Good morning!");
console.log(`Welcome ${name}, Good morning!, 
  welcome on board
  ${name}`);

//destructing

// array destructuring
const numbers = [30, 40, 4, 4, 5];
// const englisMark = numbers[0];
const [engishMark, scienceMark, french, tamil, hindi] = numbers;
console.log(engishMark, scienceMark, french, tamil, hindi);

//object destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// const name = person.name;
// const personName =  person.name
const { city, age, name: personName } = person;
console.log(personName, age, city);

//default parameters

const getValue = (a = 10, b = 2) => a * b;

console.log(getValue(4));

//spread operator
const studentInfo4 = {
  ...studentInfo,
  score: [...studentInfo.score],
  address: { ...studentInfo.address }
};

//reset operator

function getSum(...numbers) {
  console.log(numbers, "reset operator");
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(getSum(1, 2, 3, 4, 5, 1231, 12, 1, 1, 1));
