function Payment() {
    console.log("Payment function called.");
    const address = document.getElementById("Address").value;
    console.log("Address:", address); 
    if (address === "") {
        alert("Please fill in the address.");
    } else {
        alert("Order placed.");
    }
}
