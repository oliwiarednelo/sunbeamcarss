const FORMOUTPUT1 = document.getElementById("form");
    const USERNAME = sessionStorage.getItem('name');
    const LASTNAME = sessionStorage.getItem('lastName');
    const STREET = sessionStorage.getItem('street');
    const FLOOR = sessionStorage.getItem('floor');
    const POSTAL = sessionStorage.getItem('postal');
    const newDate = new Date().toLocaleString();


    FORMOUTPUT1.innerHTML = "<h3> Date: " + newDate + "</h3>" + "<p>Name: " + USERNAME + " <br> Last name: " + LASTNAME +
        "<br>Street number: " + STREET + "<br>Number/Floor: " + FLOOR + "<br>Postal code and city: " + POSTAL + "</p>"
        ;