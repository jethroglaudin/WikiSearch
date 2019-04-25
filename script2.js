/*global axios*/
// const axios = require('axios');
function handleClick() {
    console.log("button is clicked");
    makeAPICall();
}

function makeAPICall(){
    const input = document.getElementById("input").value;
    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&namespace=0&format=json`;
    axios.get(url)
        .then(function(response){
            console.log(response)
            displayResults(response.data[1], response.data[2], response.data[3]);
        })
        .catch(function(error){
            console.log(error);
        });

}

function displayResults(titles,description, links) {
    const newResponse = titles.map(function(item, index) {
        // console.log(description);
        // return "<li>" + "<a href="+ links[index]+">" +item+ "</li>"
        return `<li><a href=${links[index]}>${item}</a><br>${description[index]}</li>`;
    });
    const joinedResponse = newResponse.join("\n");
    console.log(joinedResponse);

    document.getElementById('results').innerHTML = joinedResponse;
}
