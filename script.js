/*global fetch*/
// const response = ['apple','bannanas', 'oranges'];
function handleClick() {
    console.log("button is clicked");
    // displayResults(response);
    makeAPICall();
}

function makeAPICall(){
    const input = document.getElementById("input").value;
    const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&limit=10&namespace=0&format=json`;
    
      fetch(url)
        .then(function(response) {
            console.log(response)
            return response.json()
        }).then(function(response) {
            console.log(response)
            displayResults(response[1], response[2], response[3]);
        })

}

function displayResults(titles,description, links) {
    const newResponse = titles.map(function(item, index) {
       
        // return "<li>" + "<a href="+ links[index]+">" +item+ "</li>"
        return `<li><a href=${links[index]}>${item}</a><br>${description[index]}</li>`;
    });
    const joinedResponse = newResponse.join("\n");
    // console.log(joinedResponse);

    document.getElementById('results').innerHTML = joinedResponse;
}
