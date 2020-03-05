import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

let updateJokeList = function () {
    const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}

let updateJokeLength = function () {
    document.getElementById("jokes_length").innerHTML = "From 1 to " + jokes.getJokes().length;
}

document.getElementById("joke_id_button").addEventListener("click", (event) => {
    event.preventDefault();
    const JokeId = document.getElementById("joke_id_input").value - 1;
    const newJokeByIdText = jokes.getJokeById(JokeId);
    document.getElementById("joke_id_result").innerHTML = newJokeByIdText;
});

document.getElementById("joke_add_button").addEventListener("click", (event) => {
    event.preventDefault();
    const newJokeText = document.getElementById("joke_add_input").value;
    jokes.addJoke(newJokeText);
    const jokeLength = jokes.getJokes().length;
    document.getElementById("joke_add_result").innerHTML = "Joke added as number " + jokeLength;
    updateJokeLength();
    updateJokeList();
});

updateJokeList();
updateJokeLength();

let getQuote = (location) => {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById(location).innerHTML = data.joke;
        }
        )

};

document.getElementById("assignment2_button").addEventListener("click", (event) => {
    event.preventDefault();
    return getQuote("assignment2");
});

setInterval(getQuote("assignment2_7"), 1000 * 60 * 60);

document.getElementById("svg2").addEventListener("click", (element) => {
    if (element.target.id == "svg2") {
        document.getElementById("assignment3_Result").innerHTML = "You missed... how?!?";
    } else {
        document.getElementById("assignment3_Result").innerHTML =
            element.target.parentNode.id.charAt(0).toUpperCase() + element.target.parentNode.id.substring(1) + " was chosen";
        // element.target.parentNode.id +  + " was chosen";
    }

});


/*
document.getElementById("north").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("assignment3_Result").innerHTML = "North was chosen";
});

document.getElementById("east").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("assignment3_Result").innerHTML = "East was chosen";
});

document.getElementById("west").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("assignment3_Result").innerHTML = "West was chosen";
});

document.getElementById("south").addEventListener("click", (event) => {
    event.stopPropagation();
    document.getElementById("assignment3_Result").innerHTML = "South was chosen";
});
*/









