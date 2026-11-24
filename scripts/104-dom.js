function updateText() {
    // Update h2 text from "getting elements" to "hello class"
    // 1. Get the reference to the h2 element
    let title = document.getElementById("title");
    // 2. Update the text content --> textContent or innerHTML
    title.innerHTML = "<i> hello class </i>";

    // update the p1 color to red and p2 to blue
    // 1. get the paragraphs
    //let paragraphs = document.querySelector("p"); 1st one
    let paragraphs = document.getElementsByClassName("text");
    console.log(paragraphs);
    // 2 change the color 
    paragraphs[0].style.color = "red";
    paragraphs[1].style.color = "blue";

}

function addItem() {
    // Get what we typed in the input box and display value in the browser console
    // 1. Get value from the input box
    let item = document.getElementById("item").value;
    
    // display the item in the list
    // 2. Get the reference to the ul element
    let list = document.getElementById("list");
    
    list.innerHTML += `
    <li> ${item} </li>

    `;
// 3 clear the input box
    document.getElementById("item").value = "";
}