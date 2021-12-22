//b)Get all the countries with a population of less than 2 lakhs using Filter function

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    const populationLess2L = x.filter((x) => x.population < 200000); //filter function used to create an array of json countries whose population is less than 2 lakhs
    console.log(populationLess2L); //displaying resultant array
  } else {
    console.log(this.responseText);
  }
};

newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
newRequest.send();
