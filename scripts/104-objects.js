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

// ARRAYS Recap
// 1. Define the array
let studentList = ["Justin", "John", "Jill"];

// 2. Access to an item [index]
studentList[0]; // Justin
console.log(studentList[0]);
//Traversing the array // for(index; stop condition; increment)
for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}
//Array of objects
let professorList = [

    {
        name: "Justin",
        email: "justin@example.com",
        age: 33
    },

    {
        name: "John",
        email: "john@example.com",
        age: 45
    },

    {
        name: "Jill",
        email: "jill@example.com",
        age: 40
    },

];
console.log(professorList[0].name);
console.log(professorList[1].name);
console.log(professorList[2].name);

//exercise 
//console.log(professorList[0].name)
//console.log(professorList[3].age);
// print this sentence "The name is Justin. The email is justin@example.com"
// `hey hey hey ${professorList[0].name}. The email is ${professorList[0].email}.`

console.log(professorList[0].name);
console.log(professorList[2].age);
console.log("The name is " + professorList[0].name + ". The email is " + professorList[0].email + ".");
console.log(`The name is ${professorList[1].name}. The email is ${professorList[1].email}.`);

// object constructor
function Student(name, email, cohort) {
    this.name = name;
    this.email = email;
    this.cohort = cohort;
}

// create a new object using the constructor function
let student4 = new Student("Mike", "mike@example.com", "Cohort 1");
console.log(student4);// Output: Mike