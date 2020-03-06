import 'bootstrap/dist/css/bootstrap.css'

document.getElementById("svg2").addEventListener("click", clickMap);

function clickMap(element){
    console.log("Was clicked");
    if(element.target.id == "svg2"){
        console.log("Miss");
        document.getElementById("result").innerHTML = "No country selected";
    } else {
        console.log("Hit");
        document.getElementById("result").innerHTML = "<br>";
        let countryInitials
        if(element.target.id.length !== 2){
            countryInitials = element.target.parentNode.id;
        } else {
            countryInitials = element.target.id;
        }
        let url = 'http://restcountries.eu/rest/v1/alpha?codes=' + countryInitials;
        console.log(url);
        myFetch(url, writeCountryDetails)
    }
}

function writeCountryDetails(data){
    data = data[0];
    console.log(data);
    console.log(data.name);
    console.log(data.population);
    console.log(data.area);
    let result = "Country: " + data.name + "<br>"
    + "Population: " + data.population + "<br>"
    + "Area: " + data.area + "<br>"
    + "Borders: " + data.borders.join(", ");
    document.getElementById("result").innerHTML = result;
}

function myFetch(url, callback){
    fetch(url)
    .then(res => res.json())
    .then(data => callback(data));
}



