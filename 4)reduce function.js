//d)Print the total population of countries using reduce function

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    const totalPopulation = x
      .map((populationArray) => populationArray.population)
      .reduce((x, y) => x + y);
    //first mapping json population data into an array of population
    //reduce function is used to add population from array created from mapping
    console.log(totalPopulation); //displaying resultant array
  } else {
    console.log(this.responseText);
  }
};

newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
newRequest.send();
