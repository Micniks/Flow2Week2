/* global fetch */

setTable();

function makeOptions(method, data) {
    var option = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    };
    if (data) {
        option.body = JSON.stringify(data);
    }
    return option;
}

function addPerson() {
    let person = {
        fName: document.getElementById("addPerson_fName").value,
        lName: document.getElementById("addPerson_lName").value,
        phone: document.getElementById("addPerson_phone").value,
        street: document.getElementById("addPerson_street").value,
        city: document.getElementById("addPerson_city").value,
        zip: document.getElementById("addPerson_zip").value
    };
    let option = makeOptions('POST', person);
    let url = 'http://localhost:8080/Flow2Week1/api/person/add';
    myFetch(url, option, writeError);
    document.getElementById("addPerson_fName").value = "";
    document.getElementById("addPerson_lName").value = "";
    document.getElementById("addPerson_phone").value = "";
    document.getElementById("addPerson_street").value = "";
    document.getElementById("addPerson_city").value = "";
    document.getElementById("addPerson_zip").value = "";
    setTable();
}

function writeError(data){
    if(data.message){
        document.getElementById("add_Response").innerHTML = data.message;
    } else {
        document.getElementById("add_Response").innerHTML = "";
    }
}

function setTable() {
    let url = 'http://localhost:8080/Flow2Week1/api/person/all';
    let option = makeOptions('GET');
    myFetch(url, option, makePersonTable);
}

function myFetch(url, option, callback) {
    fetch(url, option)
            .then(res => res.json())
            .then(data => {
                if (callback) {
                    callback(data);
                }
            });
}

function makePersonTable(persons) {
    let table = "<table>" + makePersonTableHead() + makePersonTableBody(persons) + "</table>";
    document.getElementById("personTable").innerHTML = table;
}

function makePersonTableHead() {
    return "<tr>" +
            "<th>" + "ID" + "</th>" +
            "<th>" + "First Name" + "</th>" +
            "<th>" + "Last Name" + "</th>" +
            "<th>" + "Phone" + "</th>" +
            "<th>" + "Street" + "</th>" +
            "<th>" + "City" + "</th>" +
            "<th>" + "Zip" + "</th>" +
            "</tr>";
}

function makePersonTableBody(persons) {
    return "<tr>" + persons.all.map(person => {
        return "<th>" + person.id + "</th>" +
                "<th>" + person.fName + "</th>" +
                "<th>" + person.lName + "</th>" +
                "<th>" + person.phone + "</th>" +
                "<th>" + person.street + "</th>" +
                "<th>" + person.city + "</th>" +
                "<th>" + person.zip + "</th>";
    }).join("</tr><tr>") + "</tr>";
}


document.getElementById("addButton").addEventListener("click", addPerson);
document.getElementById("refreshButton").addEventListener("click", setTable);




