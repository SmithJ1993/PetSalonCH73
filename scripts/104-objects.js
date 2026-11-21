// primatove / basic
let name = "John";
let age = 45;
let isStudent = false;

let name2 = "Jill";
let age2 = 45;
let isStudent2 = false;

// Non primative / Advance (Complex)
let student1 = {
    name: "Justin", 
    age: 33,
    isStudent: true
};

// 1. Access to the properties use the . <----
student1.age

console.log(student1.name);
console.log(student1.age);
console.log(student1.isStudent);

let student2 = {
    name: "John",
    age: 45,
    isStudent2: true
}

let student3 = {
    name: "Jill",
    age: 45,
    isStudent3: true
}

console.log(student2.name);
console.log(student2.age);
console.log(student2.isStudent2);

console.log(student3.name);
console.log(student3.age);
console.log(student3.isStudent3);

// Interpolation 
`The name is ${student2.name}. The age is ${student2.age}.`
console.log(`The name is ${student2.name}. The age is ${student2.age}.`);

let sentenceContainer = document.getElementById("sentence");

sentenceContainer.innerHTML = 
`<li> ${student2.name}. 
<li> ${student2.age}.`;

