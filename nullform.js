const FORMOUTPUT = document.getElementById("formoutput");

if (sessionStorage.getItem("name") === null) {
    FORMOUTPUT.innerHTML = "<p>Form was not used.</p>"
 } else {
    FORMOUTPUT.innerHTML = "<p>Name: " + localStorage.getItem('name') + " <br>Email: " + localStorage.getItem('email') + " <br>City: " + localStorage.getItem('city') + "</p>" ;
}