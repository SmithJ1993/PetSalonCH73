function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

function registerProduct(event) {
    event.preventDefault(); // Prevent the default form submission

//get the values from the input fiels
let productName = document.getElementById("productName").value;
let productPrice = document.getElementById("productPrice").value;
let productCategory = document.getElementById("productCategory").value;


// use the values to create the object using the constructor
let product = new Product(productName, productPrice, productCategory);

// create the table tow and add it into the table body 
let row = document.createElement("tr");
row.innerHTML = `
<td> ${product.name} </td>
<td> $${product.price} </td>
<td> ${product.category} </td>
`;
let body = document.getElementById("Body");
body.appendChild(row);

// clear the input fields
document.getElementById("productName").value = "";
document.getElementById("productPrice").value = "";
document.getElementById("productCategory").value = "";
}
