let carOutput = []; 
fetch("https://oliwiarednelo.github.io/api/carlist.json") 
    .then(function (data) { 
        return data.json(); 
    })                   
    .then(function (post) {
        carOutput = post.carlist;
    })
document.getElementById("arrivalfield").valueAsDate = new Date();
const output = document.getElementById('output');
const cardsOutput = document.getElementById('cardsOutput');
const peopleInput = document.getElementById('peoplefield');
const suitcaseInput = document.getElementById('suitcasefield');
const form = document.getElementById('form');
const arrivalfield = document.getElementById("arrivalfield");
const departurefield = document.getElementById("departurefield");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validDates(arrivalfield.value, departurefield.value)) {
        output.innerHTML = ""; 
        for (const car of carOutput) {
            if (peopleInput.value <= car.people && suitcaseInput.value <= car.suitcases) {
                const days = calculateDays(arrivalfield.value, departurefield.value);
                const clone = cardsOutput.content.cloneNode(true);
                const carName = clone.querySelector(".carName");
                const image = clone.querySelector("img");
                const carCategory = clone.querySelector(".carCategory");
                const peopleAmount = clone.querySelector(".peopleAmount");
                const suitcaseAmount = clone.querySelector(".suitcaseAmount");
                const comfort = clone.querySelector(".comfort");
                const carPrice = clone.querySelector(".carPrice");
                const link = clone.querySelector("a");

                sessionStorage.setItem("carName", car.modelName);
                sessionStorage.setItem("pickUpDate", arrivalfield.value);
                sessionStorage.setItem("departureDate", departurefield.value);
                sessionStorage.setItem("days", days);
                sessionStorage.setItem("carPrice", calculatePrice(days, car.price));

                link.href = `page2.html?carChoice=${car.modelName}&pickUpDate=${arrivalfield.value}&departureDate=${departurefield.value}&days=${days}&carPrice=${calculatePrice(days, car.price)}`;
                image.src = car.image;
                carName.textContent = car.modelName;
                carCategory.textContent += car.category;
                suitcaseAmount.textContent += car.suitcases;
                peopleAmount.textContent += car.people;
                comfort.textContent += car.comfort;
                carPrice.textContent = "DKK " + calculatePrice(days, car.price);
                output.appendChild(clone);
            }
        }
    } else {
        output.innerText = "Enter a pick-up date that is earlier than the return date.";
    }

});

function validDates(arrivalfield, departurefield) {
    const arrival = new Date(arrivalfield);
    const departure = new Date(departurefield);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
};

function calculateDays(arrivalfield, departurefield) {
    const arrival = new Date(arrivalfield);
    const departure = new Date(departurefield);
    const timediff = departure.getTime() - arrival.getTime()
    const daydiff = timediff / (1000 * 3600 * 24) + 1;
    return daydiff;
};

function calculatePrice(days, carprice) {
    const priceprday = 100;
    const VAT = 0.25;
    const basicAmount = 495;
    const totalprice = (basicAmount + (days * carprice) + (days * priceprday))* (1 + VAT);
    return totalprice.toFixed(2);
};