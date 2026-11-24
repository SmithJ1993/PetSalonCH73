let pet1 = {
    Name: "Luna",
    Age: 2,
    Gender: "Female",
    ServiceType: "Grooming",
    Breed: "Corgi"
}

let pet2 = {
    Name: "Perry",
    Age: 3,
    Gender: "Male",
    ServiceType: "Shampoo",
    Breed: "MinPin"
}
let pet3 = {
    Name: "Ziggy",
    Age: 4,
    Gender: "Male",
    ServiceType: "Teeth Cleaning",
    Breed: "Golden Doodle"
}
function displayPets(){
    let sentenceContainer = document.getElementById("sentence");
    sentenceContainer.innerHTML = `
    <ol>
        <li>${pet1.Name}</li> 
        <li>${pet2.Name}</li>
        <li>${pet3.Name}</li>
    </ol>
    `;
}
displayPets();

function Pet(Name, Age, Gender, ServiceType, Breed){
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.ServiceType = ServiceType;
    this.Breed = Breed;
};

let pet4 = new Pet("Loki", 1, "Male", "Nail Clipping", "Chihuahua");
let pet5 = new Pet("Bella", 2, "Female", "Vaccination", "Labrador");
let pet6 = new Pet("Milo", 3, "Male", "Grooming", "Beagle");

