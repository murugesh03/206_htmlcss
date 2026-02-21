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
console.log(shopNowBtn);
//Poiting the nav tag
const mainNav = document.getElementsByClassName("nav");
console.log(mainNav);
const navLink = mainNav[0].querySelectorAll(`.nav a`);
console.log(navLink);
const anchorTag = document.querySelector(".nav");
console.log(anchorTag);
const mainContent = document.querySelector(".main");

shopNowBtn.innerText = "shopping";

console.log(shopNowBtn.innerText);

console.log(mainNav[0].innerHTML);

console.log(navLink[0].getAttribute("href"));

// shopNowBtn.setAttribute("disabled", "true");

console.log((shopNowBtn.style.backgroundColor = "rgb(255, 0, 0)"));

const products = [
  { name: "Classic Shoes", price: "49.99", id: 1 },
  { name: "Smart Watch", price: "99.99", id: 2 },
  { name: "Wireless Earbuds", price: "59.99", id: 3 },
  { name: "Laptop", price: "1299.99", id: 4 },
  { name: "Tshirt", price: "19.99", id: 5 }
];

const productCard = document.createElement("section");

productCard.innerHTML = "<h2>Featured Products</h2>";

productCard.setAttribute("class", "products-section");

const productGrid = document.createElement("div");

productGrid.setAttribute("class", "product-grid");

productGrid.setAttribute("id", "products-container");

mainContent.appendChild(productCard);

productCard.appendChild(productGrid);

for (let i = 0; i < products.length; i++) {
  const productCard = document.createElement("div");
  productCard.setAttribute("class", "product-card");
  productCard.setAttribute("data-id", products[i].id);
  productCard.innerHTML = `
    <h3>${products[i].name}</h3>
    <p>Price: $${products[i].price}</p>
    `;
  productGrid.appendChild(productCard);
}

const customerReviews = document.createElement("div");
customerReviews.setAttribute("class", "customer-reviews");
customerReviews.innerHTML = "<h2>Customer Featured Products</h2>";
productCard.after(customerReviews);

shopNowBtn.addEventListener("click", function () {
  alert("Shop Now button clicked!");
});
