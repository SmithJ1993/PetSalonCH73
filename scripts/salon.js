let salon = {
    Name: "Paws and Claws",
    Hours: {
        Open: "9:00 am",
        Close: "5:00 pm"
    },
    Phone: "123-456-7890",
    Address: {
        Street: "123 Main St",
        City: "San Diego",
        State: "CA",
        Zip: "92012"
    }
}   
function displaySalonInfo(){
    let salonInfo = document.getElementById("salon-info");
    salonInfo.innerHTML =
    "Salon: " + salon.Name +
    " Hours: " + salon.Hours.Open + " - " + salon.Hours.Close +
    " Phone: " + salon.Phone +
    " Address: " + salon.Address.Street + ", " + salon.Address.City + ", " + salon.Address.State + " " + salon.Address.Zip;
}
displaySalonInfo();
