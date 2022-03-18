fetch("https://dawa.aws.dk/postnumre")
.then (function (data) {
    return data.json();
})
.then (function (post) {
    const datalist = document.getElementById("codesandcities");
    const listofcities = post;

    for (city of listofcities) {
        datalist.insertAdjacentHTML("beforeend", `<option>${city.nr} ${city.navn}</option>`)
    }
})