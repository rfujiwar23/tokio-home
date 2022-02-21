//Read InsideFolder.txt File
fetch("./text/root.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("appData").innerHTML =text  
    });
  });
  