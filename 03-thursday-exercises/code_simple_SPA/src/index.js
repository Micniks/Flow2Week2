import 'bootstrap/dist/css/bootstrap.css'

/*
let makeOptions = function(method, data){
    return {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
};

let startUp = function () {
    fetch('http://localhost:8080/Flow2Week2ThursdayExercises/api/generic', makeOptions('GET'))
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.getElementById("fetched").innerHTML =
                data.name + ", " + data.email;
        });
};

startUp();
*/

function clicker(evt){
    evt.preventDefault();
    changeText();
}

function changeText() {
    let url = "https://jokerthewizard.dk/CA1Copy/api/groupmember/all";
    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                document.getElementById("table_id").innerHTML = "<table>" + insertIntoTableHeaders(data) + insertIntoTableFooters(data) + "</table>";
            });
}

function insertIntoTableHeaders(map) {
    let headers = Object.getOwnPropertyNames(map[0]);
    let result = "<tr><th>" + headers.join("</th><th>") + "</th><tr>";
    return result;
}
;

function insertIntoTableFooters(names) {
    let htmlRows = "<tr>";
    names.forEach(e => {
        let temp = Object.values(e).map(function (a) {
            if(a ==="Green") {
                return "<td style='background-color:Lime;'>" + a + "</td>";
            } else if(a==="Yellow") {
                return "<td style='background-color:Yellow;'>" + a + "</td>";
            } else if(a==="Red"){
                return "<td style='background-color:Red;'>" + a + "</td>";
            } else {
                return "<td>" + a + "</td>";
            }
            
        }).join("") + "</tr>";
        htmlRows += temp;
    });
    console.log(htmlRows);
    return htmlRows;
}
;

changeText();
document.getElementById("rldBtn").addEventListener("click", clicker);


