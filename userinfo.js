const FORMOUTPUT = document.getElementById("formoutput");
const NAME = sessionStorage.getItem('carName1');
const arrivalDate = sessionStorage.getItem('pickUpDate');
const departureDate = sessionStorage.getItem('departureDate');
const days = sessionStorage.getItem('days');
const priceCar = sessionStorage.getItem('carPrice1');
const accessories = sessionStorage.getItem("accessories");
const total = sessionStorage.getItem('total');


FORMOUTPUT.innerHTML = `<fieldset><p>ALL INCLUSIVE:<h3>TOTAL: ${total} DKK</h3>incl. VAT</fieldset></p>
<h3>${NAME}</h3>
<p>Pick up date: ${arrivalDate}</p>
<p>Departure Date: ${departureDate}</p>
<p>Rental days: ${days}</p>

<p><h3>Total car rental cost: ${priceCar} DKK </h3> incl. VAT</p>`;


const FORM = document.getElementById("form");

FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    const NAME = document.getElementById("firstName");
    const LASTNAME = document.getElementById("lastName");
    const STREET = document.getElementById("streetName");
    const FLOOR = document.getElementById("numberFloor");
    const POSTAL = document.getElementById("postalandcity");


    sessionStorage.setItem("name", NAME.value);
    sessionStorage.setItem("lastName", LASTNAME.value);
    sessionStorage.setItem("street", STREET.value);
    sessionStorage.setItem("floor", FLOOR.value);
    sessionStorage.setItem("postal", POSTAL.value);

    document.location.href = "receipt.html";
})