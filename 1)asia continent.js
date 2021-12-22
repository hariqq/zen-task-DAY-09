//1)Solving problems using array functions on rest countries data.
//a)Get all the countries from Asia continent /region using Filter function

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    const countriesInAsia = x.filter((x) => x.region == "Asia"); //filter function used to create an array of json countries whose region is in asia.
    console.log(countriesInAsia); //displaying resultant array
  } else {
    console.log(this.responseText);
  }
};

newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
newRequest.send();
