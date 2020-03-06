import 'bootstrap/dist/css/bootstrap.css'

var users;

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}



const getSingleUser = function () {
    let input = document.getElementById("singleUser_input_txt").value;
    let result = users.filter(x => x.id == input);
    if (result.length > 0) {
        document.getElementById("singleUser_result").innerHTML = "<br>" + makeTable(result);
    } else {
        document.getElementById("singleUser_result").innerHTML = "<br><p>No Result</p>";
    }

};

document.getElementById("singleUser_input_button").addEventListener("click", getSingleUser);

const deleteUser = function () {
    let input = document.getElementById("deleteUser_input_txt").value;
    let options = makeOptions('DELETE', { "id": input });

    fetch('http://localhost:3333/api/users/' + input, options)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            if (data.status) {
                console.error('Fail:', data);
                document.getElementById("deleteUser_result").innerHTML = data.msg;
            } else {
                console.log('Success:', data);
                document.getElementById("deleteUser_result").innerHTML = "ID: " + input + " was deleted";
            }
        });
    updateUserTable();
};

document.getElementById("deleteUser_input_button").addEventListener("click", deleteUser);

const addNewUser = function () {
    let newName = document.getElementById("newUser_name").value;
    let newGender = document.getElementById("newUser_gender").value;
    let newAge = document.getElementById("newUser_age").value;
    let newEmail = document.getElementById("newUser_email").value;
    let newUser = { "age": newAge, "name": newName, "gender": newGender, "email": newEmail };

    let options = makeOptions('POST', newUser);
    fetch('http://localhost:3333/api/users', options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.status) {
                console.error('Fail:', data);
                document.getElementById("newUser_Response").innerHTML = data.msg;
            } else {
                console.log('Success:', data);
                document.getElementById("newUser_Response").innerHTML = newName + " was added as " + data.id;
            }
        });
    updateUserTable();
};

document.getElementById("newUser_button").addEventListener("click", addNewUser);

const editUser = function () {
    let id = document.getElementById("editUser_id").value;
    let newName = document.getElementById("editUser_name").value;
    let newGender = document.getElementById("editUser_gender").value;
    let newAge = document.getElementById("editUser_age").value;
    let newEmail = document.getElementById("editUser_email").value;
    let newUser = { "id": id, "age": newAge, "name": newName, "gender": newGender, "email": newEmail };

    let options = makeOptions('PUT', newUser);
    fetch('http://localhost:3333/api/users/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.status) {
                console.error('Fail:', data);
                document.getElementById("editUser_Response").innerHTML = data.msg;
            } else {
                console.log('Success:', data);
                document.getElementById("editUser_Response").innerHTML = "ID: " + id + " was successfully edited";
            }
        });
    updateUserTable();
};

document.getElementById("editUser_button").addEventListener("click", editUser);

let makeTable = function (users) {
    return "<table>"
        + "<tr>"
        + "<th>ID</th>"
        + "<th>Name</th>"
        + "<th>Sex</th>"
        + "<th>Age</th>"
        + "<th>Mail</th>"
        + "</tr>"
        + updateUserTable_Inner(users)
        + "</table>";
}

let updateUserTable = function () {
    fetch('http://localhost:3333/api/users/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("userList").innerHTML = makeTable(data);
            document.getElementById("userList_Size").innerHTML = "IDs range from "
                + smallestID(data) + " to " + biggestID(data) + "... There might be gaps";
            users = data;
        }
        );
}

let updateUserTable_Inner = function (users) {
    return "<tr>" + users.map(user =>
        "<td>" + user.id + "</td>" +
        "<td>" + user.name + "</td>" +
        "<td>" + user.gender + "</td>" +
        "<td>" + user.age + "</td>" +
        "<td>" + user.email + "</td>"
    )
        .join("</tr><tr>") + "</tr>";
}

let smallestID = function (users) {
    return users.reduce((accu, current) => {
        if (accu.id > current.id) {
            return current;
        } else {
            return accu;
        }
    }).id;
}

let biggestID = function (users) {
    return users.reduce((accu, current, index, arr) => {
        if (accu.id < current.id) {
            return current;
        } else {
            return accu;
        }
    }).id;
}




updateUserTable();



