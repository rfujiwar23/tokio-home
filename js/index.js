//Read InsideFolder.txt File
fetch("./text/sect04-03.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-03").innerHTML =text  
    });
});

fetch("./text/sect04-02.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-02").innerHTML =text  
    });
});

fetch("./text/sect04-01.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-01").innerHTML =text  
    });
});